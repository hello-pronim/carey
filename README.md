# **Carey Next JS.**

Frontend Next app for Carey Grammar School website.

## **Getting started**

### **Relevant documentation**

* [NextJS](https://nextjs.org/docs/getting-started)
* [Stitches - Styled Components](https://stitches.dev/docs/installation)
* [Radix UI](https://www.radix-ui.com/docs/primitives/overview/getting-started)
* [Framer Motion](https://www.framer.com/docs/)
* [React Select](https://react-select.com/home)
* [React Use](https://github.com/streamich/react-use)

### **Initial Setup**

* run `nvm use` to use the required node version
* run `yarn`
* run `yarn dev` to start your local environment

## **Building components for re-use**

I'd like to make an effort to not have any duplicate components where possible, if a component that you're building can be made in a way that is reusable please do so. To add some visibility to what components have been made, I thought it would be a good idea to have an up-to-date list of the components that have been developed so it's easier to see if something you need has already been made.

In the case that any of the common components do not meet the functionality you require, attempt to extend that component first before creating a single use offshoot. If a new component is necessary, include your reasoning in the commit message / pull request.

**Available Components;**

- Button ```@components/common/button```
- Container ```@components/common/container```
- Form fields ```@components/common/forms/fields```
  - Checkbox
  - Collapsible group
  - Radio buttons
  - Select
  - Text input (including text, phone, email, password)
  - Text area
- Header (includes drawer navigation) ```@components/common/header```
- Icons ```@components/common/icons```
  - Carey link
  - Chevron
  - Heart box
  - Morph arrow (arrow used in buttons)
  - Phone
  - Plus
  - Search
- Layouts (parts of site that persist between pages, e.g. header/footer) ```@components/common/layouts```
  - Default Layout
- Side Navigation ```@components/common/sideNav```
- Typography ```@components/common/typography```
- Hero ```@components/hero```

In the case that the component you are building is single use / page specific, create the folder for it inside its respective page component folder. If you find yourself needing to use it in more than that one page, make the updates necessary for it to be reusable and move it into the top level component directory. ```@components/**```

**Package use & file structure examples**

Here is a few components that illustrate the use of the tech stack for the project, as well as a general file structure for reference to try and keep things consistent.

**Header**

The largest of our core components (so far). When a component has a few parts needed for its core functionality, do your best to separate out the individual functionality into a parts folder, this will help us keep our code clean as well as limit risks involved with updating or overhauling a specific part of the component, e.g. if we need to swap out the drawer for whatever reason, none of its functionality lives inside the header itself so it's safe to swap it out for a new component without any knock-on effects throughout the site.

File Structure;

- header.tsx
- styles.tsx
- parts
  - drawer 
    - accordionItem.tsx
    - activeIndicator.tsx
    - animations.tsx
    - index.tsx
    - mobile.tsx
    - navItem.tsx
    - styles.tsx
    - utils.tsx

The header is also uses **Framer Motion** quite heavily, so could be useful to reference when working on animation for components.

**Styled component variants**

Two components that heavily utilise the variant system that stitches provides are;
- typography
- button

**Container & common component destructuring**

Trying something a bit different with some of the common components where you can import the specific parts that make up the overall component in the case that finer control is needed, the container is a perfect example of this.

With the container you can either import the whole structure, or the individual parts that make up the container component, there's further documentation on the intended use of the container in the file itself.

---

Below is an overview of the packages used in the project, when adding new packages please link any relevant documentation in the list at the top of this read me, and if you feel further explanation is needed provide an example or description along with the others.
## **Overview of packages in use**

### **Stitches - Styled Components**

There's a few reasons We've decided to go with stitches for the styled components over emotion like we have in previous projects, some of which being;
- Better runtime performance
- Has built in themeing, previously we had paired ```styled-system``` with ```emotion``` to achieve a similar result
- Custom util support, for things like creating shorthand for css properties, e.g. ```px: 16``` vs ```padding-left: 16, padding-right: 16```. We had this to an extent with styled-system but didn't have the ability to expand on them, at this current point in time I've included all the short hand from styled-system in the theme config (```styles/stitches.config.tsx```), any future utils can be added here as well.
- Token based system for css values
- And what sold me on making the switch in the first place, component variants. I will elaborate on why, and how it works below.

**Stitches variants overview**

Variants are how stitches handles props getting passed to the component. you define them inside the styled component along with the rest of your styles, and once defined you can now use props on the component to determine the variant to be used for the component. Here is a simple example of how it works, full documentation will also be linked.

```javascript
const Button = styled("button", {
  // universal styles that apply to all variants
  px: 16,
  py: 8,
  cursor: 'pointer',
  '&:hover': {
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
  variants: {
    theme: {
      dark: {
        bg: '#1a1a1a',
        color: '#fff',
      },
      light: {
        color: '#1a1a1a',
        bg: '#fff',
      },
    }
  }
})

export const Example = () => {
  return (
    <>
      <Text as="h3" variant="Body-Regular"> Button Example </Text>
      <Button theme="dark">Button</Button>
    </>
  );
}
```
You can also specify styling for when multiple variants are used together if the pairing results in a different look than those variants being used individually, these are called compound variants and you define these in a similar way to regular variants, just with an added step of specifying which variants result in that style.

```javascript
const Button = styled("button", {
  // universal styles that apply to all variants
  px: 16,
  ...
  variants: {
    theme: {
      dark: {...},
      light: {...},
    },
    scale: {
      lg: {...},
      md: {...}
    }
  },
  compoundVariants: [
    {
      theme: 'dark',
      scale: 'lg',
      css: {
        //styling that applies to the button when passed props for theme, and scale.
        ...
      }
    }
  ]
})
```

On top of this you can also set the default variants for the component, so when no props are passed it will default to the specific styling of your choice, default variants just slow in at the end of the styled component;
```javascript
defaultVariants: {
  theme: 'light',
  scale: 'md',
}
```
This is just a brief rundown on how the variants work, for a more in depth look you can find it [here](https://stitches.dev/docs/variants).

for the most part stitches works in a very similar way to emotion so there shouldn't be a whole lot of trouble picking it up, for when you do get stumped on how something works the documentation is great and quite thorough. You can find it [here](https://stitches.dev/docs/introduction).
### **Radix UI - Component Library**

Radix UI is a component Library that focuses on the core functionality of the component, rather than providing their own style system. Every component is imported as an individual dependency so we only end up with the code that we are actually using.

Because these components are unstyled as a baseline, that means we do not have to overwrite any styling or worry about anything conflicting, just simply styling the primitives that go into making the component, here is the tabs component as an example;

```javascript
import * as Tabs from '@radix-ui/react-tabs';

const Tabs = () => {
  <Tabs.Root defaultValue="tab1">
    <Tabs.List>
      <Tabs.Trigger value="tab1">
        Tab 1
      </Tabs.Trigger>
      <Tabs.Trigger value="tab2">
        Tab 2
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content>
      {...}
    </Tabs.Content>
  </Tabs.Root>
}

export default Tabs;
```
As Radix UI components' goal is to provide the core functionality rather than the styling, this will work as a tab component out of the box, it just won't look like much... but! because it is all unstyled, that means styling it is as simple as creating styled components using the primatives as a base like so;

```javascript
import * as Tabs from '@radix-ui/react-tabs';
import { styled } from "@styles/stitches";

const Root = styled(Tabs.Root, {
  ...
})
```
And once you've got the styled version, you can just replace the base primitive in the component with it.

for further documentation on what primitives are available, and the props availible to us check out the documentation [here](https://www.radix-ui.com/docs/primitives/components/tabs).

### **Framer Motion - Animation Library**

framer motion is a powerful animation library to handle more advanced animations in the site. For simple effects css animation is perfectly fine but I strongly encourage utilising framer when trying to do anything more involved. It provides really elegant syntax, the ability to control the animation based on state changes, specialised user interactions, and when used correctly will run animations at a stable 60fps.

There's a lot to go over with framer, but as it's not a necessity in the project, I will just link the documentation [here](https://www.framer.com/docs/).