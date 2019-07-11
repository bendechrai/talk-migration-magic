import React from 'react';
import { Deck, Slide, Title, Subtitle, Text, List, Image, Columns, Footer } from '@sambego/diorama';
import './App.css';

function App() {

  const footer = <Footer left="@bendechrai" right="https://ben.sc" />

  return (
    <Deck footer={footer} presenterNotes>
      <Slide notes="Hello">
        <Image src="images/magician.jpg" full color="#999" />
        <div className="title-overlay">
          <div>
            <Title><span role="img">✨</span> Abracadabra <span role="img">✨</span></Title>
            <Title>Let Me In</Title>
          </div>
          <div>
            <Subtitle>Ben Dechrai</Subtitle>
            <Text>Developer Evangelist</Text>
            <img src="images/auth0.png" style={{width: '200px'}} />
          </div>
        </div>
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Image src="images/bendechrai.jpg" alt="Photo of Ben" full />
          </div>
          <div>
            <Subtitle>Ben Dechrai</Subtitle>
            <List>
              <li>I <span role="img">❤️</span> Security</li>
              <li>Privacy Advocate</li>
              <li>Tech Evangelist @ Auth0</li>
            </List>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Image src="images/birds.png" full color="#ccc" />
        <div className="title-overlay">
          <Title>Migration</Title>
        </div>
      </Slide>
      <Slide>
        <Image src="images/waterfall.jpg" full color="#bbb" />
        <div className="title-overlay">
          <Title>Waterfall Lifecycle</Title>
        </div>
      </Slide>
      <Slide>
        <Columns>
          <div>
            <Image src="images/pieces.jpg" full color="#ccc" />
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
        <Image src="images/nailedit.jpg" color="#ccc" />
        <div className="title-overlay overlay-between">
          <div>
            <Title>The New</Title>
          </div>
          <div>
            <Subtitle>Same as the old</Subtitle>
            <Text>(The old product doesn't stay static)</Text>
          </div>
        </div>
      </Slide>
      <Slide>
        <Image src="images/fire.jpg" full color="#777" />
        <div className="title-overlay">
          <Title>On launch day</Title>
          <Subtitle>Migration fails</Subtitle>
        </div>
      </Slide>
      <Slide>
        <Image src="images/fire.jpg" full color="#555" />
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
        <Image src="images/waterfall.jpg" full color="#f88" />
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
        <Image src="images/transform.jpg" full color="#555" />
        <div className="title-overlay">
          <List>
            <ul>We refactor all the time</ul>
            <ul>We create technical debt to meet a deadline</ul>
            <ul>With the promise of fixing it later</ul>
          </List>
        </div>
      </Slide>
      <Slide>
        <div className="title-overlay overlay-between">
          <div>
            <Subtitle>Refactoring</Subtitle>
            <List ordered>
              <li>Break a product down into its major parts</li>
            </List>
          </div>
        </div>
      </Slide>
      <Slide>
        <div className="title-overlay overlay-between">
          <div>
            <Subtitle>Refactoring</Subtitle>
            <List ordered>
              <li>Break a product down into its major parts</li>
              <li>Pick one part, and refeactor that in to a component</li>
            </List>
          </div>
        </div>
      </Slide>
      <Slide>
        <div className="title-overlay overlay-between">
          <div>
            <Subtitle>Refactoring</Subtitle>
            <List ordered>
              <li>Break a product down into its major parts</li>
              <li>Pick one part, and refeactor that in to a component</li>
            </List>
          </div>
          <Text>* Only works if the new platform can also use that component</Text>
        </div>
      </Slide>
      <Slide>
        <List>
          <li>Repeated code <span role="img">➡️</span> a function</li>
          <li>Related functions <span role="img">➡️</span> a class</li>
          <li>Related classes <span role="img">➡️</span> a module or component</li>
        </List>
      </Slide>
      <Slide>
        <Image src="images/wheels.jpg" full color="#555" />
        <div className="title-overlay">
          <Title>Don't reinvent the wheel</Title>
        </div>
      </Slide>
      <Slide notes="Don't create a component that someone else has already written">
        <Text>Many components exist already</Text>
      </Slide>
      <Slide>
        <Image src="images/business.jpg" full color="#555" />
        <div className="title-overlay">
          <Subtitle>Not core business features</Subtitle>
        </div>
      </Slide>
      <Slide>
        <Text>Existing libraries <span role="img">➡️</span> More community backing</Text>
      </Slide>
      <Slide>
        <Image src="images/tugofwar.jpg" full color="#999" />
        <div className="title-overlay">
          <Subtitle>Submit a pull request!</Subtitle>
        </div>
      </Slide>
      <Slide>
        <Subtitle>Can't find one? Make yours open source!</Subtitle>
        <Columns>
          <div>
            <Image src="images/couple.jpg" full color="#595" />
            <div className="title-overlay">
              <Text>Help others</Text>
            </div>
          </div>
          <div>
            <Image src="images/faces.jpg" full color="#995" />
            <div className="title-overlay">
              <Text>Community<br/>recognition</Text>
            </div>
          </div>
          <div>
            <Image src="images/heart.jpg" full color="#955" />
            <div className="title-overlay">
              <Text>Developers will<br/>love your company</Text>
            </div>
          </div>
          <div>
            <Image src="images/programmer.jpg" full color="#559" />
            <div className="title-overlay">
              <Text>Code Contributions</Text>
            </div>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Image src="images/tired.gif" full color="#777" />
        <div className="title-overlay">
          <Title>Outsource the Mundane</Title>
        </div>
      </Slide>
      <Slide>
        <Subtitle>Move logic to "the cloud"</Subtitle>
      </Slide>
      <Slide>
        <Text>Static files <span role="img">➡️</span> CDN</Text>
      </Slide>
      <Slide>
        <Text>Outsource payment processing <span role="img">➡️</span>  Reduce the legal worries</Text>
      </Slide>
      <Slide>
        <Text>Outsource identity management <span role="img">➡️</span>  Reduce the risk of storing passwords</Text>
      </Slide>
      <Slide>
        <Image src="images/complex-simple.jpg" full color="#777" />
        <div className="title-overlay overlay-between">
          <div>
            <Subtitle>Your application is now smaller</Subtitle>
          </div>
          <div>
            <Text>Easier to migrate</Text>
            <Text>Easier to maintain</Text>
            <Text>Reduces server load</Text>
            <Text>Makes scaling easier</Text>
          </div>
        </div>
      </Slide>
      <Slide>
        <Title>Demo</Title>
        <Columns>
          <div>
            <Image src="images/fire.jpg" full color="#733" />
            <div className="title-overlay">
              <Text>Demo catches fire</Text>
            </div>
          </div>
          <div>
            <Image src="images/celebration.jpg" full color="#773" />
            <div className="title-overlay">
              <Text>Demo works!</Text>
            </div>
          </div>
        </Columns>
      </Slide>
      <Slide>
        <Columns>
          <div>
            <div className="title-overlay overlay-between">
              <div>
                <Title>Thanks</Title>
                <Text>Questions?</Text>
              </div>
              <div>
                <Text>Ben Dechrai</Text>
                <img src="images/auth0.png" style={{width: '100px'}} />
              </div>
            </div>
          </div>
          <div>
            <Image src="images/bendechrai.jpg" alt="Photo of Ben" full />
          </div>
        </Columns>
      </Slide>
    </Deck>
  );
}

export default App;
