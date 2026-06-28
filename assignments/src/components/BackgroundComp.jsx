const BackgroundComp = ({props}) => {
    const bg= props[0]
    const text = props[1]

    return (
  <>
    <div style={{ backgroundColor : bg, color: text}}>
        <h2>Name:Sowbakiya</h2>
        <h2>Role:FullStack Developer</h2>
    </div>
    </>
  )
}

export default BackgroundComp