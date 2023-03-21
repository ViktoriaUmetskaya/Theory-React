import React from 'react';
import '../../css/pages/Content-style.css';

function Refs(){
    return(
        <div className='content-block'>
            <h1 className='content-title'>Refs</h1>
            <div className="text-block">
                <p>Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.</p>
                <p>Ситуации, в которых использование рефов является оправданным:</p>
                <ul>
                    <li>Управление фокусом, выделение текста или воспроизведение медиа.</li>
                    <li>Императивный вызов анимаций.</li>
                    <li>Интеграция со сторонними DOM-библиотеками.</li>
                </ul>
                <p>Рефы создаются с помощью React.createRef() и прикрепляются к React-элементам через ref атрибут. Обычно рефы присваиваются свойству экземпляра класса в конструкторе, чтобы на них можно было ссылаться из любой части компонента.</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                class MyComponent extends React.Component {
                    constructor(props) {
                      super(props);
                      this.myRef = React.createRef();
                    }
                    render() {
                      return <div ref={this.myRef} />;
                    }
                }
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>Mожно использовать атрибут ref внутри функционального компонента при условии, что он ссылается на DOM-элемент или классовый компонент:</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                function CustomTextInput(props) {
                    // textInput должна быть объявлена здесь, чтобы реф мог иметь к ней доступ
                    const textInput = useRef(null);
                  
                    function handleClick() {
                      textInput.current.focus();
                    }
                  
                    return (
                      <div>
                        <input
                          type="text"
                          ref={textInput} />
                        <input
                          type="button"
                          value="Фокус на поле для ввода текста"
                          onClick={handleClick}
                        />
                      </div>
                    );
                  }
                `}</code></pre>
            </div> 
        </div>
    )
}

export default Refs;