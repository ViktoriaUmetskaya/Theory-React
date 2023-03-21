import React from 'react';
import '../../css/pages/Content-style.css';

function Event(){
    return(
        <div className='content-block'>
            <h1 className='content-title'>Обработка событий</h1>
            <div className="text-block">
                <p>События в React именуются в стиле camelCase вместо нижнего регистра.</p>
                <p>С JSX вы передаёте функцию как обработчик события вместо строки.</p>
                <p>Например, в HTML:</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                <button onclick="activateLasers()">
                Активировать лазеры
                </button>
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>В React немного иначе:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
                <button onClick={activateLasers}>
                Активировать лазеры
                </button>
                `}</code></pre>
            </div>
            <div className="text-block">
                <p>Ещё одно отличие — в React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault. Например, в обычном HTML для отмены отправки формы (действие по умолчанию) можно написать:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
                <form onsubmit="console.log('Отправлена форма.'); return false">
                <button type="submit">Отправить</button>
                </form>
                `}</code></pre>
            </div>
            <div className="text-block">
                <p>В React это будет выглядеть так:</p>
            </div>
            <div className="code-block">
                <pre><code>{`
                function Form() {
                    function handleSubmit(e) {
                    e.preventDefault();
                    console.log('Отправлена форма.');
                    }
                
                    return (
                    <form onSubmit={handleSubmit}>
                        <button type="submit">Отправить</button>
                    </form>
                    );
                }
                `}</code></pre>
            </div>
            <div className="text-block">
                <p>При использовании React обычно не нужно вызывать addEventListener, чтобы добавить обработчики в DOM-элемент после его создания. Вместо этого добавьте обработчик сразу после того, как элемент отрендерился.</p>
            </div>
        </div>
    )
}

export default Event;