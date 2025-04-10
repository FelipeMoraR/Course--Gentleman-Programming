import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}

interface Props {
    children: ReactNode;
}

class ErrorBoundary extends Component<Props, ErrorBoundaryState> { //This control only render problems, not logic problems, this is a class because react doest have this as a component.
    constructor(props: Props) {
        super(props); //Super calls the contructor of Component, and with this you can use the this.state for example
        this.state = { hasError: false }
    } //This control the creation of instances.

    // Visual example of the class and the super method:
    // class Animal {
    //     constructor(name) {
    //         this.name = name;
    //     }
    // }
      
    // class Dog extends Animal {
    // constructor(name) {
    //         super(name); // llama al constructor de Animal
    //         this.breed = "Labrador";
    //     }
    // }


    static getDerivedStateFromError(error: Error): ErrorBoundaryState { //This is a static method of react, make a re-render
        console.log('Derived error: ', error);
        return { hasError: true }
    } //Static functions helps to avoid the creation of instances, so you can call this like this ErrorBoundary.getDerivedStateFromError(error)

    
    
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void { //When an error appears this is the next thing that will happen, dont make a re-render
        console.error('Error: ', error);
        console.error('Error Info: ', errorInfo);
    }

    render() {
        if(this.state.hasError) return <h1>Oops! Something went wrong :/</h1>

        return this.props.children;
    }
}

export default ErrorBoundary;