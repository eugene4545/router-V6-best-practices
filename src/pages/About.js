import { Navigate } from "react-router-dom"
import { useState } from "react"

export default function About() {
    const [user, setUser] =useState('mario')

    if (!user) {
        return <Navigate to= "/" replace={true} />
    }
    return(
        <div className="about">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quas saepe tempore dolorum modi quibusdam pariatur, vitae accusamus
                rem voluptas aperiam quia fugit, in, repudiandae at impedit sapiente! 
                Deserunt facilis veniam, et alias suscipit voluptatem qui sit non
                necessitatibus ex animi eaque tenetur explicabo nisi aspernatur eligendi ipsa nesciunt ipsam
                aliquam?</p>
        <p>Perferendis tempora sapiente perspiciatis minus quo ullam ipsum tenetur 
            veritatis nam eos, rerum voluptatem dolor et debitis exercitationem, sequi
                voluptate incidunt! Consequatur adipisci nostrum natus tenetur numquam ea
                rerum. Iste atque adipisci rem delectus. Quia esse, illo minima autem 
                eaque ab necessitatibus nesciunt dignissimos laborum recusandae, eligendi
                reprehenderit voluptate eius.</p>
        <p>Incidunt porro itaque reiciendis? Officiis placeat libero atque necessitati
            bus sequi tempore, nobis ea adipisci sint, accusamus rem quaerat eos
                assumenda, praesentium nostrum provident? Totam in non sint corporis?
                Illo non cumque accusamus rerum. Ex sequi hic dolorem cupiditate dolores,
                quos atque, ad molestiae ab qui consectetur et error, repellat numquam.</p>
    <button onClick={() => setUser(null)}>logout</button>
    </div>
    )
}