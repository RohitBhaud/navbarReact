const Navbar =()=>{
    let btn = [{ btn: "Services", url: "masaischool.com" }, { btn: "Projects", url: "flipcart.com" }, { btn: "About", url: "ame" }]
    return (
        <div className="navbar">
            <div id="circle" className="smallleft"><img src="https://cdn5.vectorstock.com/i/1000x1000/23/64/rb-logo-letter-monogram-slash-with-modern-logo-vector-27982364.jpg" alt=""  height={40} width={60}/></div>
            
            <div className='marginleft'>
          {btn.map((e) => {
            return <a href={e.url} className="smallleft">{e.btn}</a>
          })}
          </div>

            <button className="btn">Contact</button>
        </div>
    )
}

export {Navbar}