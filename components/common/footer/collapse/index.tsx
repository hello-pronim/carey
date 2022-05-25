import { collapse, collapseInner } from "./animations";
import {
  Column,
  Container,
  HeadingText,
  List,
  ListItem,
  ListItemText,
  Wrapper,
} from "./styles";

const CollapseBody = () => {
  return (
    <Container
      variants={collapse}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Wrapper
        variants={collapseInner}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Column>
          <HeadingText variant="Body-xSmall-Bold">About Carey</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xSmall">Why Carey</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">
                Our Values & Vision
              </ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Carey Carter
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Christian Ethos
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Strategic Plan
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Leadership</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Our Principal
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">Our Board</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Board Profiles
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Leadership Team
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    School Captains
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">
                Educational Philosophy
              </ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Co-education Benefits
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Life at Carey</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">
                Complete Education
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Community</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">Centenary</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Parent Associations
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Community Groups
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">Alumni</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">Carey Medal</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">Giving</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Carey Family Business Directory
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">
                Campuses & Facilities
              </ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Kew (ELC - 12)
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Donvale (ELC - 6)
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Bulleen Sports Complex
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Camp Toonallook
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">Facilities</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Virtual Tours
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Employment</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Policies</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">FAQ</ListItemText>
            </ListItem>
          </List>
        </Column>
        <Column>
          <HeadingText variant="Body-xSmall">Our School</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xSmall">Early Learning</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    ELC at Donvale
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">ELC at Kew</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">ELC Program</ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Junior School</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Junior School at Donvale
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Junior School at Kew
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Junior School Program
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Middle School</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Transition to Middle School
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Middle School Program
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Senior School</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Senior School Program
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Year 10 Program
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">VCE</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    International Baccalaureate
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Co-Curricular</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">Sports</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">Music</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Theatre & Drama
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Outdoor Education
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Debating & Public Speaking
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Exchange & Tours
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Community Service
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Clubs & Interest Groups
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Team Dates</ListItemText>
            </ListItem>
          </List>
        </Column>
        <Column>
          <HeadingText variant="Body-xSmall">Enrolment</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xSmall">
                Application Process
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">English</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">
                Simplified Chinese
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">
                Traditional Chinese
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Vietnamese</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Book a Tour</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Apply Online</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xSmall">
                    Application Form
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Scholarships</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Fees & Events</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">English</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">
                Simplified Chinese
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Vietnamese</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">
                Application Form
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">
                Location & Transport
              </ListItemText>
            </ListItem>
          </List>
        </Column>
        <Column>
          <HeadingText variant="Body-xSmall">News & Events</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xSmall">News</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Publications</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Events</ListItemText>
            </ListItem>
          </List>
        </Column>
        <Column>
          <HeadingText variant="Body-xSmall">Contact</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xSmall">Contact</ListItemText>
            </ListItem>
          </List>
        </Column>
        <Column>
          <HeadingText variant="Body-xSmall">Footer</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xSmall">Stay up-to-date</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Privacy Policy</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xSmall">Terms of Use</ListItemText>
            </ListItem>
          </List>
        </Column>
      </Wrapper>
    </Container>
  );
};

export default CollapseBody;
