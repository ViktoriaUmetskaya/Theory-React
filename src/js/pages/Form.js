import React from 'react';
import '../../css/pages/Content-style.css'

function Form(){
    return(
        <div className='content-block'>
            <h1 className='content-title'>Form</h1>
            <div className="text-block">
                <p>В React мы можем использовать все стандартные элементы форм, которые есть в html, однако здесь эти элементы приобретают дополнительные возможности. Рассмотрим, как работать с формами в React.</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                class NameForm extends React.Component {
                    constructor(props) {
                      super(props);
                      this.state = {value: ''};
                  
                      this.handleChange = this.handleChange.bind(this);
                      this.handleSubmit = this.handleSubmit.bind(this);
                    }
                  
                    handleChange(event) {
                      this.setState({value: event.target.value});
                    }
                  
                    handleSubmit(event) {
                      alert('Отправленное имя: ' + this.state.value);
                      event.preventDefault();
                    }
                  
                    render() {
                      return (
                        <form onSubmit={this.handleSubmit}>
                          <label>
                            Имя:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                          </label>
                          <input type="submit" value="Отправить" />
                        </form>
                      );
                    }
                  }
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>Чтобы контролировать введенные значения, в конструкторе устанавливается объект state:</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                this.state = {name: ""};
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>При определении поля ввода каждое поле связывается с определенным значением в state:</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                <input type="text" value={this.state.name} onChange={this.onChange} />
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>Так, источником значения для поля ввода имени является объект this.state.name.</p>
                <p>Для отслеживания изменений в поле ввода нам надо определить обработчик для события change с помощью атрибута onChange. Этот обработчик будет срабатывать при каждом нажатии клавиши клавиатуры. Если мы не определим для поля подобный обработчик, то это поле ввода будет доступно только для чтения.</p>
                <p>Суть каждого обработчика заключается в изменении значений в this.state:</p>
            </div> 
            <div className="code-block">
                <pre><code>{`
                onChange(e) {
                    var val = e.target.value;
                    this.setState({name: val});
                }
                `}</code></pre>
            </div> 
            <div className="text-block">
                <p>С помощью e.target.value получаем введенное значение. После обновления новое значение this.state.name отобразится в поле ввода.</p>
            </div> 
        </div>
    )
}

export default Form;