function Button () {

  const handleClick = () => {
    window.alert('Coucou, bien joué')
  }

  return (
    <button onClick={handleClick}>
      Click Me !
    </button>
  )
}

export default Button