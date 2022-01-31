import style from "./messageForm.module.css";

const messageForm = () => {
  return (
    <div className={style.formInner}>
      <form>
        <div>
          <h3>Написать нам</h3>

          <input type="text" name="text" required="" placeholder="name:" />
        </div>
        <div>
          <input type="email" name="email" required="" placeholder="email:" />
        </div>
        <div>
          <textarea placeholder="Сообщение..." rows="3"></textarea>
        </div>
        <div className={style.wrap}>
          <button className={style.button} type="submit" value="Отправить">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default messageForm;
