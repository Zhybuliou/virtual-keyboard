const HeaderShow = (body) => {
  const Header = document.createElement('div');
  Header.classList.add('header');
  Header.innerHTML = `
  <div class="header-content">
       <p class="title">RSS Virtual keyboard</p>
       <div class="toggle">
           <p class="toggle-text">dark</p>
           <label class="toggle-control">
               <input type="checkbox" checked="checked">
               <span class="control"></span>
           </label>
           <p class="toggle-text">light</p>
       </div>
   </div>`;
  body.append(Header);
};

export default HeaderShow;
