const HeaderShow = (body) => {
  const Header = document.createElement('div');
  Header.classList.add('header');
  Header.innerHTML = `
  <div class="header-content">
       <p class="title">RSS Virtual keyboard</p>
       <div class="toggle">
           <p class="toggle-text">light</p>
           <label class="toggle-control">
               <input type="checkbox" id="toggle-input" >
               <span class="control"></span>
           </label>
           <p class="toggle-text">dark</p>
       </div>
   </div>`;
  body.append(Header);
};

export default HeaderShow;
