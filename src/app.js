import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";
import Item from "./components/item";
import {generateCode, getCurrency} from "./utils";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const [basket, setBasket] = useState({});
  const [isOpened, setIsOpened] = useState(false);
  const list = store.getState().list;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),
    onToggleModal: useCallback(() => {
      setIsOpened(prev => !prev);
    }, []),
      onCloseModal: useCallback((e) => {
          if(e.currentTarget === e.target){
              setIsOpened(false);
          }
      }, [])
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls openModal={callbacks.onToggleModal}/>
      <List list={list}
            onDeleteItem={callbacks.onDeleteItem}
            onSelectItem={callbacks.onSelectItem}
            setBasket={setBasket}
      />
          <Modal isOpened={isOpened} setIsOpened={callbacks.onCloseModal}>
            <Head title="Корзина">
              <button onClick={callbacks.onToggleModal}>Закрыть</button>
            </Head>
            {
              !!basket.itemPrice ? <List list = {Object.keys(basket)} setBasket={setBasket} isModalOpen={isOpened} basket={basket}/>: <div className='Modal-empty'>Здесь пусто</div>
            }

          </Modal>

    </PageLayout>
  );
}

export default App;
