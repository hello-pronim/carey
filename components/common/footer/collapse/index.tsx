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
          <HeadingText variant="Body-xxSmall-Bold">About Carey</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Why Carey</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Our Values & Vision
              </ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Carey Carter
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Christian Ethos
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Strategic Plan
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Leadership</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Our Principal
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">Our Board</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Board Profiles
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Leadership Team
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    School Captains
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Educational Philosophy
              </ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Co-education Benefits
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Life at Carey</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Complete Education
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Community</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">Centenary</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Parent Associations
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Community Groups
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">Alumni</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Carey Medal
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">Giving</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Carey Family Business Directory
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Campuses & Facilities
              </ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Kew (ELC - 12)
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Donvale (ELC - 6)
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Bulleen Sports Complex
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Camp Toonallook
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">Facilities</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Virtual Tours
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Employment</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Policies</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">FAQ</ListItemText>
            </ListItem>
          </List>
        </Column>
        <Column>
          <HeadingText variant="Body-xxSmall">Our School</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Early Learning</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    ELC at Donvale
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">ELC at Kew</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    ELC Program
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Junior School</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Junior School at Donvale
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Junior School at Kew
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Junior School Program
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Middle School</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Transition to Middle School
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Middle School Program
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Senior School</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Senior School Program
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Year 10 Program
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">VCE</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    International Baccalaureate
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Co-Curricular</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">Sports</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">Music</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Theatre & Drama
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Outdoor Education
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Debating & Public Speaking
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Exchange & Tours
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Community Service
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Clubs & Interest Groups
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Team Dates</ListItemText>
            </ListItem>
          </List>
        </Column>
        <Column>
          <HeadingText variant="Body-xxSmall">Enrolment</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Application Process
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">English</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Simplified Chinese
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Traditional Chinese
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Vietnamese</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Book a Tour</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Apply Online</ListItemText>
              <List>
                <ListItem>
                  <ListItemText variant="Body-xxSmall">
                    Application Form
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Scholarships</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Fees & Events</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">English</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Simplified Chinese
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Vietnamese</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Application Form
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Location & Transport
              </ListItemText>
            </ListItem>
          </List>
        </Column>
        <Column>
          <HeadingText variant="Body-xxSmall">News & Events</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xxSmall">News</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Publications</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Events</ListItemText>
            </ListItem>
          </List>
        </Column>
        <Column>
          <HeadingText variant="Body-xxSmall">Contact</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Contact us</ListItemText>
            </ListItem>
          </List>
        </Column>
        <Column>
          <HeadingText variant="Body-xxSmall">Footer</HeadingText>
          <List>
            <ListItem>
              <ListItemText variant="Body-xxSmall">
                Stay up-to-date
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Privacy Policy</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="Body-xxSmall">Terms of Use</ListItemText>
            </ListItem>
          </List>
        </Column>
      </Wrapper>
    </Container>
  );
};

export default CollapseBody;
