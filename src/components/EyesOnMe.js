function EyesOnMe() {
    function attention(event) {
        if(event.type === 'focus'){
            console.log('Good!')
        }
        else if(event.type === 'blur'){
            console.log('Hey! Eyes on me!')
        }
    }
    return (
        <button onFocus={attention} onBlur={attention}>'Eyes on me'</button>
    )
}


export default EyesOnMe;
