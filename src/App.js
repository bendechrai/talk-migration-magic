import React from 'react';
import { Deck, Slide, Title, Subtitle, Text, List, Image, Columns, Footer } from '@sambego/diorama';
import logo from './logo.svg';
import './App.css';

function App() {

  const footer = <Footer left="@bendechrai" right="https://ben.sc" />

  return (
    <Deck footer={footer} presenterNotes>
      <Slide notes="Hello">
        <Image src="/images/magician.jpg" full color="#777" />
        <div className="title-overlay">
          <div>
            <Title>✨ Abracadabra ✨</Title>
            <Title>Let Me In</Title>
          </div>
          <div>
            <Subtitle>Ben Dechrai</Subtitle>
            <Text>Developer Evangelist @ Auth0</Text>
          </div>
        </div>
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Image src="/images/bendechrai.jpg" alt="Photo of Ben" full />
          </div>
          <div>
            <Subtitle>Ben Dechrai</Subtitle>
            <List>
              <li>I ❤️ Security</li>
              <li>Privacy Advocate</li>
              <li>Tech Evangelist @ Auth0</li>
            </List>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Title>Migration</Title>
      </Slide>
      <Slide>
        <Image src="/images/waterfall.jpg" full color="#bbb" />
        <div className="title-overlay">
          <Title>Waterfall Lifecycle</Title>
        </div>
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Image src="/images/pieces.jpg" full color="#ccc" />
          </div>
          <div>
            <List>
              <li>Start from scratch</li>
              <li>There's always some functionality you missed</li>
            </List>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Title>The New</Title>
            <Subtitle>Same as the old</Subtitle>
            <Text>(The old product doesn't stay static)</Text>
          </div>
          <div>
            <Image src="/images/nailedit.jpg" color="#ccc" />
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Image src="/images/fire.jpg" full color="#777" />
        <div className="title-overlay">
          <Title>On launch day, migration fails</Title>
        </div>
      </Slide>
      <Slide>
        <Image src="/images/fire.jpg" full color="#555" />
        <div className="title-overlay">
          <Title>Two options</Title>
          <Columns>
            <div>
              <Text>Fix in production</Text>
            </div>
            <div>
              <Text>Roll back</Text>
            </div>
          </Columns>
        </div>
      </Slide>
      <Slide>
        <Image src="/images/waterfall.jpg" full color="#f88" />
        <div className="title-overlay">
          <Title>Not Waterfall Lifecycle</Title>
        </div>
      </Slide>
      <Slide>
        <Title>Refactoring?</Title>
      </Slide>
      <Slide>
        <Subtitle>Refactoring != Rewriting</Subtitle>
      </Slide>
      <Slide>
        <Image src="/images/transform.jpg" full color="#777" />
        <div className="title-overlay">
          <List>
            <ul>We refactor all the time</ul>
            <ul>We create technical debt to meet a deadline</ul>
            <ul>With the promise of fixing it later</ul>
          </List>
        </div>
      </Slide>
      <Slide>
        <Text>Break a product down into its major parts</Text>
      </Slide>
      <Slide>
        <Text>Break a product down into its major parts</Text>
        <Text>Pick one part, and refeactor that in to a component</Text>
      </Slide>
      <Slide>
        <Text>Break a product down into its basic components</Text>
        <Text>Pick one part, and refeactor that in to a component</Text>
        <Text>* This only works if you're migrating to something that can also use that component</Text>
      </Slide>
      <Slide>
        <List>
          <li>Extract repeated code and put it in functions</li>
          <li>Group functions in classes to combine logical collections</li>
          <li>Group classes in to exportable modules / components</li>
        </List>
      </Slide>
      <Slide>
        <Title>Don't reinvent the wheel</Title>
      </Slide>
      <Slide>
        <Text>Don't create a component that someone else has already written</Text>
      </Slide>
      <Slide>
        <Text>If these components are not your core business features, they can be separated out in to libraries and be managed separately.</Text>
      </Slide>
      <Slide>
        <Text>Start replacing them with existing libraries which have more community backing and adoption.</Text>
      </Slide>
      <Slide>
        <Text>Doesn't quite work as you want? Submit a pull request!</Text>
      </Slide>
      <Slide>
        <Text>Can't find one? Make yours open source! You'll be helping others, without giving away your business advantage.</Text>
        <Text>In return, you'll get recognition from the community, build your company's brand in the eyes of developers, and people might even start volunteering to help you make your code even better!</Text>
      </Slide>
      <Slide>
        <Text>Outsource the Mundane</Text>
      </Slide>
      <Slide>
        <Text>The next level of refactoring is to move logic to the cloud, and away from your application altogether:</Text>
        <List>
          <li>host your images and other static assets with a CDN</li>
          <li>use a payment provider to reduce the legal worries of processing credit cards yourself</li>
          <li>use an identity provider to reduce the risk of storing user credential</li>
        </List>
      </Slide>
      <Slide>
        <Text>Identify the components of your systems that can actually be systems in their own right. You're making the footprint of your main application much smaller now, which makes it easier to migrate. It also makes it easier to maintain in future, reduces the load on your servers, and makes scaling easier when you need to.</Text>
      </Slide>
      <Slide>
        <Title>Demo</Title>
      </Slide>
      <Slide>
        <Text>Let's look at migrating a simple blog from Wordpress to Laravel. What are the components in Wordpress that we need to consider?</Text>
      </Slide>
      <Slide>
        <Title>Blog Posts</Title>
        <Text>Business features - custom code</Text>
        <Text>Migrate data from the Wordpress schema to your Laravel application</Text>
      </Slide>
      <Slide>
        <Title>Commenting</Title>
        <Text>Comments are associated with posts and users</Text>
        <Text>Migrating would need to a comment table and model...</Text>
        <Text>Associated with a user and blog post...</Text>
      </Slide>
      <Slide>
        <Title>Commenting</Title>
        <Text>Then we'd need to migrate the comments</Text>
        <Text>and users associated with that comment,</Text>
        <Text>and make the correct associations</Text>
      </Slide>
      <Slide>
        <Title>Commenting</Title>
        <Text>Ignoring the complexity of the user model for now, that's complex enough already.</Text>
      </Slide>
      <Slide>
        <Title>Commenting</Title>
        <Text>Let's outsource this to a system like Disqus</Text>
        <Text>Low risk model - these comments are public anyway</Text>
        <Text>Disqus do the migration for you!</Text>
      </Slide>
      <Slide>
        <Title>Login, Logout & Registration</Title>
      </Slide>
      <Slide>
        <Title>Login, Logout & Registration</Title>
        <Text>We don't do our own credit card processing</Text>
        <Text>So why our own identity management?</Text>
      </Slide>
      <Slide>
        <Title>Login, Logout & Registration</Title>
        <Text>Let's outsource this too, to an ID as a Service provider</Text>
      </Slide>
      <Slide>
        <Text>At it's core, these components give you the Wordpress blog. There are many more features to Wordpress, but we'll just focus on these right now. What can we do about any of them?</Text>
      </Slide>
      <Slide>
        <Title>Demo</Title>
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Image src="/images/bendechrai.jpg" alt="Photo of Ben" full />
          </div>
          <div>
            <Subtitle>Thanks</Subtitle>
            <Text>Questions?</Text>
          </div>
        </Columns>
      </Slide>
    </Deck>
  );
}

export default App;
