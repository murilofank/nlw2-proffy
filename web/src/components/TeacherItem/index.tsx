import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://instagram.fpoa5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/103363990_288801115606316_7255679073316599334_n.jpg?_nc_ht=instagram.fpoa5-1.fna.fbcdn.net&_nc_ohc=qgQDeT9S0McAX_xFzhG&oh=98e1d6cd08faccf61c5ef4c430227094&oe=5F529A0B" alt="Murilo Fank" />
                <div>
                    <strong>Murilo Fank</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de programação
                        <br /><br />
                        Apaixonado por criar front-end de sites e fazer com que as pessoas tenham uma boa experiência ao navegarem pelo vasto mundo da internet
                    </p>

            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;