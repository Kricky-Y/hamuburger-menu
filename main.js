'use strict';

// 定数名を付けて要素を取得する

{
  const open = document.querySelector('#open');
  const overlay = document.querySelector('.overlay');
  open.addEventListener('click', () => {
    // CSSで、overlayを表示させた状態にshowというクラスを付けて、classList.addで表示させる
    overlay.classList.add('show');
    // CSSで、sp-menuのopenに対してhideというクラスを付けて、classList.addで三本線メニューを表示させないようにする
    open.classList.add('hide');
  });

  // バツ印でoverlayが閉じるようにする
  const close = document.querySelector('#close')
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}