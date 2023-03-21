import React from 'react';
import '../../css/pages/Content-style.css';

function Key(){
    return(
        <div className='content-block'>
            <h1 className='content-title'>Key</h1>
            <div className="text-block">
                <p>«Ключ» — это специальный строковый атрибут, который нужно указывать при создании списка элементов. </p>
                <p>Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                const numbers = [1, 2, 3, 4, 5];
                const listItems = numbers.map((number) =>
                  <li key={number.toString()}>
                    {number}
                  </li>
                );
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи:</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                const todoItems = todos.map((todo) =>
                <li key={todo.id}>
                  {todo.text}
                </li>
                );
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>Когда у вас нет заданных ID для списка, то в крайнем случае можно использовать индекс элемента как ключ:</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                const todoItems = todos.map((todo, index) =>
                // Делайте так, только если у элементов массива нет заданного ID
                <li key={index}>
                  {todo.text}
                </li>
                );
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>Как правило, элементам внутри map() нужны ключи.</p>
                <p>Ключи внутри массива должны быть уникальными только среди своих соседних элементов. Им не нужно быть уникальными глобально. Можно использовать один и тот же ключ в двух разных массивах.</p>
                <p>Ключи служат подсказками для React, но они никогда не передаются в ваши компоненты. Если в компоненте нужно то же самое значение, то передайте его явно через проп с другим именем:</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                const content = posts.map((post) =>
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title} />
                );
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>В примере выше компонент Post может прочитать значение props.id, но не props.key.</p>
            </div> 
        </div>
    )
}

export default Key;