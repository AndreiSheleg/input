import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => { // event - его типизацию берём, заведомо ошибочно набирая тип number

        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('') // обнуляем строку поиска после нажатия на кнопку
                          // и это знакчение передаём в инпут в качестве атрибута
                           // т.е. title = ' пустота '
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={ onClickButtonHandler }> +Add </button>
        </div>
    );
};


