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

```javascript
open: boolean,     // If 'true', the modal is open, if 'false', the modal is closed
onClose: () => void,      // Allowing you to customize the function called on closing
message?: string,      // *Optional* : To customize the message of the modal if needed
containerClassName?: string,     // *Optional* : To customize the class name of the container, to add styles
messageClassName?: string,     // *Optional* : To customize the class name of the message, to add styles
closeButtonClassName?: string,     // *Optional* : To customize the class name of the close button, to add styles
closeButtonLabel: string | ReactNode,     // Allowing you to customize the close button with text or a node
children?: ReactNode,     // *Optional* : Allowing you to add children nodes if needed
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

Kevin Bertin

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

Project Link: [https://github.com/mrtinber/react-modal-tinber](https://github.com/mrtinber/react-modal-tinber)

<p align="right">(<a href="#readme-top">back to top</a>)</p>