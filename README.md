<a id="readme-top"></a>

# React Modal Tinber

## Description

'react-modal-tinber' is a customizable modal component for React applications, built with TypeScript.

## Installation

Install the package via npm: 

```bash
npm install react-modal-tinber
```

or yarn: 

```bash
yarn add react-modal-tinber
```

## Props

```ts
open: boolean,     // If 'true', the modal is open, if 'false', the modal is closed
onClose: () => void,      // Allowing you to customize the function called on closing
message?: string,      // *Optional* : To customize the message of the modal if needed
containerClassName?: string,     // *Optional* : To customize the class name of the container, to add styles
messageClassName?: string,     // *Optional* : To customize the class name of the message, to add styles
closeButtonClassName?: string,     // *Optional* : To customize the class name of the close button, to add styles
closeButtonLabel: string | ReactNode,     // Allowing you to customize the close button with text or a node
children?: ReactNode,     // *Optional* : Allowing you to add children nodes if needed
```

## Usage

Here is a basic example of how to use the component:

```tsx
import React, { useState } from 'react';
import { Modal } from 'react-modal-tinber';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>My Application</h1>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        message="This is a modal"
        closeButtonLabel="Close"
      />
    </div>
  );
};

export default App;
```

## Author

Kevin Bertin 
- [GitHub](https://github.com/mrtinber)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

GitHub Repository Link: [https://github.com/mrtinber/react-modal-tinber](https://github.com/mrtinber/react-modal-tinber)

## License

[![MIT License][license-shield]][license-url]

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt

<p align="right">(<a href="#readme-top">back to top</a>)</p>