import React from 'react';
import '../../css/pages/Content-style.css';

function Props(){
    return(
        <div className='content-block'>
            <h2 className='content-title'>Props</h2>
            <div className='text-block'>
                <p>Props (пропсы) — это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту.</p>
                <p>Пока что мы только встречали React-элементы, представляющие собой DOM-теги:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
                const element = <div />;
                `}</code></pre>
            </div>
            <div className='text-block'>
                <p>Но элементы могут описывать и наши собственные компоненты:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
                const element = <Welcome name="Алиса" />;
                `}</code></pre>
            </div>
            <div className='text-block'>
                <p>Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы» (props).</p>
                <p>Например, этот компонент выведет «Привет, Алиса» на страницу:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
                function Welcome(props) {
                    return <h1>Привет, {props.name}</h1>;
                }
                
                const root = ReactDOM.createRoot(document.getElementById('root'));
                const element = <Welcome name="Алиса" />;
                root.render(element);
                `}</code></pre>
            </div>
        </div>
    )
}

export default Props;
