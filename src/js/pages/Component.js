import React from 'react';
import '../../css/pages/Content-style.css';

function Component(){
    return(
        <div className='content-block'>
            <h2 className='content-title'>Компоненты</h2>
            <div className="text-block">
                <p>Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.</p>
                <p>Компоненты React —  это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).</p>
                <p> Компоненты бывают функциональные и классовые.</p>
                <p>Проще всего объявить React-компонент как функцию:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            function Welcome() {
                return <h1>Привет, мир! </h1>;
            }
            `}</code></pre>
            </div>
            <div className='text-block'>
                <p>Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями.</p> 
                <p>Ещё компоненты можно определять как классы:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
            class Welcome extends React.Component {
                render() {
                    return <h1>Привет, {this.props.name}</h1>;
                }
            }
            `}</code></pre>
            </div>  
            <div className='text-block'>
                <p>С точки зрения React, эти два компонента эквивалентны.</p>
            </div>
        </div>
    )
}

export default Component;