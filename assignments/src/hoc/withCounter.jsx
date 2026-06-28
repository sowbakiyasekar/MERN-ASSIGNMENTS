const withCounter = (WrappedComponent) => (props) =>{

  return <WrappedComponent {...props}/>

}

export default withCounter