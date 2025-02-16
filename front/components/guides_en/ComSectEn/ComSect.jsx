import "./ComSect.css"

const ComSect = () => {
	return (
        <section className="comments">
            <h2>Коментарі і питання:</h2>
            <input className="comments__input" type="text" placeholder="Ваше ім'Я" />
            <textarea className='comments__textarea' placeholder="Залиште ваш коментар..."></textarea>
            <button>Надіслати</button>
          </section>
	);
};

export default ComSect;