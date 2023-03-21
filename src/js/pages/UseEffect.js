import React from 'react';
import '../../css/pages/Content-style.css';

function UseEffect(){
    return(
        <div className='content-block'>
            <h1 className='content-title'>UseEffect</h1>
            <div className="text-block">
                <p>Хуки — нововведение в React 16.8, которое позволяет использовать состояние и другие возможности React без написания классов.</p>
                <p>Хук эффекта даёт вам возможность выполнять побочные эффекты в функциональном компоненте.</p>
                <p>Хук позволяет использовать 3 метода жизненного цикла:</p>
                <ul>
                    <li>componentDidMount()</li>
                    <li>componentDidUpdate(prevProps, prevState)</li>
                    <li>componentWillUnmount()</li>
                </ul>
                <p>UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                useEffect ( () => { }, [])
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                useEffect ( () => { }, [name])
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                useEffect ( () => { } )
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                useEffect ( () => {
                    return () => {};
                })
                `}</code></pre>
            </div> 
        </div>
    )
}

export default UseEffect;