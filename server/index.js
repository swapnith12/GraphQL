const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//importing created models 
const Event = require('./models/events')
const User = require('./models/users');


const app = express();


app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp.graphqlHTTP({
    schema: buildSchema(`
        type Event {
          _id: ID!
          title: String!
          description: String!
          price: Float!
          date: String!
          creator : User!
        }

        type User {
          _id: ID!
          email: String!
          password: String
          createdEvent : [Event!]
        }

        input EventInput {
          title: String!
          description: String!
          price: Float!
        }

       
        input UserInput {
          email: String!
          password: String!
        }


        type RootQuery {
            events: [Event!]!
        }

        type RootMutation {
            createEvent(eventInput: EventInput): Event
            createUser(userInput: UserInput): User
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      events: () => {
        //select required event from model
        return Event.find()
        .populate('creator')
          .then(events => {
            return events.map(event => {
              return { 
                ...event._doc, 
                _id: event.id,
                creator : {
                  ...event._doc.creator._doc,
                  _id:event._doc.creator.id
                }
               };
            });
          })
          .catch(err => {
            throw err;
          });
      },
      createEvent: args => {
        //creating events
        const event = new Event({
          title: args.eventInput.title,
          description: args.eventInput.description,
          price: +args.eventInput.price,
          date: new Date().toISOString(),
          creator:'6501b11057328326890b77dc'
        })
       return event
             .save()//saving data to created model in atlas
             .then(result=>{
               console.log(result)
               return { ...result._doc };
             })
             .catch((err)=>{
               console.log()
               throw err;
             })
       
      },
      createUser: args => {
        //creating user
        return User.findOne({ email: args.userInput.email })
          .then(user => {
            if (user) {
              throw new Error('User exists already.');
            }
            return bcrypt.hash(args.userInput.password, 12);
          })
          .then(hashedPassword => {
            const user = new User({
              email: args.userInput.email,
              password: hashedPassword
            });
            return user.save();
          })
          .then(result => {
            return { ...result._doc, password: null, _id: result.id };
          })
          .catch(err => {
            throw err;
          });
      }
    },
    graphiql: true
    //for graphql interface to write queries , also useful to test queries 
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.0nw90qa.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });

