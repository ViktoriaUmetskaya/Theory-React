import React from 'react';
import '../../css/pages/Content-style.css';

function Lifecycle(){
    return(
        <div className='content-block'>
            <h1 className='content-title'>Методы жизненного цикла</h1>
            <div className="text-block">
                <p>1. constructor ()</p>
                <p>Обычно в React конструкторы используются только для двух целей:</p>
                <ul>
                    <li>Инициализация локального состояния путем присвоения объекта this.state.</li>
                    <li>Привязка методов обработчика событий к экземпляру.</li>
                </ul>
            </div>
            <div className="code-block">
                <pre><code>{`
                constructor(props) {
                    super(props);
                    this.state = { counter: 0 };
                    this.handleClick = this.handleClick.bind(this);
                }
                `}</code></pre>
            </div>
            <div className="text-block">
                <p>2. render ()</p>
                <p>Рендеринг компонента. Отдает JSX.</p>
            </div>  
            <div className="code-block">
                <pre><code>{`
                render () {
                    return (
                        <div>
                            'Hello'
                        </div>
                    )
                }
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>3. componentDidMount()</p>
                <p>componentDidMount() вызывается сразу после монтирования компонента (вставки в дерево). Используется для отправки запросов на серверк удаленным ресурсам, setTimeout, обращение к DOM-элементам.</p>
            </div>  
            <div className="code-block">
                <pre><code>{`
                componentDidMount()
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>4. componentDidUpdate(prevProps, prevState)</p>
                <p>Вызывается после обновления компонента. В качестве парапметров передаются старые значения объектов: props и state.</p>
            </div>  
            <div className="code-block">
                <pre><code>{`
                componentDidUpdate(prevProps, prevState) {
                    if (this.props.userID !== prevProps.userID) {
                        this.fetchData(this.props.userID);
                    }
                }
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>5. componentWillUnmount()</p>
                <p>Вызывается перед удалением компонента из DOM. Используется для закрытия асинхронных запросов, таймеров.</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                componentWillUnmount() {
                    alert("The component named Header is about to be unmounted.");
                }
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>6. shouldComponentUpdate(nextProps, nextState)</p>
                <p>Вызывается каждый раз при обновлении объекта props или state. В качестве параметра передаются новый объект props и state.</p>
                <p>Эта функция должна возвращать true (надо делать обновление) или false (игнорировать обновление). По умолчанию возвращается true. Но если функция будет возвращать false, то тем самым мы отключим обновление компонента, а последующие функции не будут срабатывать.</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                shouldComponentUpdate(nextProps, nextState) {
                    if (this.state.count === nextState.count) {
                        return false
                    }
                    return true
                }
                `}</code></pre>
            </div>     
        </div>
    )
}

export default Lifecycle;