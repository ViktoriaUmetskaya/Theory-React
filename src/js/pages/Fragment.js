import React from 'react';
import '../../css/pages/Content-style.css'

function Fragment(){
    return(
        <div className='content-block'>
            <h1 className='content-title'>Fragment</h1>
            <div className="text-block">
                <p>Возврат нескольких элементов из компонента является распространённой практикой в React. Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.</p>
                <p>Заменяем теги div на Fragment:</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                render() {
                    return (
                    <React.Fragment>
                        <ChildA />
                        <ChildB />
                        <ChildC />
                    </React.Fragment>
                    );
                }
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>Существует сокращенная запись (импортировать не нужно):</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
            render() {
                return (
                    <>
                        <ChildA />
                        <ChildB />
                        <ChildC />
                    </>
                )
            }
            `}</code></pre>
            </div> 
            <div className="text-block">
                <p>Недостаток сокращенной записи: нельзя использовать атрибут key.</p>
            </div> 
        </div>
    )
}

export default Fragment;