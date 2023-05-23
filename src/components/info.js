//import Local from './assets/local.png'

function Info(){
    return(<>
    
    <section id="info">
    <div className="info-content">
          <h1 id="h1-info">Informações</h1>
          <div className="Ungabunga">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.6158904656763!2d-46.58150092388208!3d-23.61810476368084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d47a95a265f%3A0xb8b2280e637ac0d9!2sUniversidade%20Municipal%20de%20S%C3%A3o%20Caetano%20do%20Sul%20-%20Campus%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1684714356078!5m2!1spt-BR!2sbr" id="mapa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
          <div className="info-cards">
            <div className="info-card" id="info-local">
              <svg
                width="50"
                height="64"
                viewBox="0 0 50 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 13.6364C22.7525 13.6364 20.5554 14.3028 18.6867 15.5515C16.818 16.8001 15.3615 18.5749 14.5014 20.6513C13.6413 22.7278 13.4162 25.0126 13.8547 27.2169C14.2932 29.4213 15.3755 31.4461 16.9647 33.0353C18.5539 34.6245 20.5787 35.7068 22.7831 36.1453C24.9874 36.5838 27.2722 36.3587 29.3487 35.4986C31.4251 34.6385 33.1999 33.182 34.4485 31.3133C35.6972 29.4446 36.3636 27.2475 36.3636 25C36.3636 21.9862 35.1664 19.0958 33.0353 16.9647C30.9042 14.8336 28.0138 13.6364 25 13.6364ZM25 31.8182C23.6515 31.8182 22.3333 31.4183 21.212 30.6691C20.0908 29.9199 19.2169 28.8551 18.7008 27.6092C18.1848 26.3633 18.0497 24.9924 18.3128 23.6698C18.5759 22.3472 19.2253 21.1324 20.1788 20.1788C21.1324 19.2253 22.3472 18.5759 23.6698 18.3128C24.9924 18.0497 26.3633 18.1848 27.6092 18.7008C28.8551 19.2169 29.9199 20.0908 30.6691 21.212C31.4183 22.3333 31.8182 23.6515 31.8182 25C31.8182 26.8083 31.0998 28.5425 29.8212 29.8212C28.5425 31.0998 26.8083 31.8182 25 31.8182ZM25 0C18.3719 0.00751913 12.0174 2.64385 7.33063 7.33064C2.64385 12.0174 0.00751913 18.3719 0 25C0 33.9205 4.12216 43.375 11.9318 52.3438C15.441 56.3965 19.3905 60.0459 23.7074 63.2244C24.0895 63.4921 24.5448 63.6357 25.0114 63.6357C25.4779 63.6357 25.9332 63.4921 26.3153 63.2244C30.6243 60.0445 34.5661 56.3952 38.0682 52.3438C45.8665 43.375 50 33.9205 50 25C49.9925 18.3719 47.3561 12.0174 42.6694 7.33064C37.9826 2.64385 31.6281 0.00751913 25 0ZM25 58.5227C20.304 54.8295 4.54545 41.2642 4.54545 25C4.54545 19.5751 6.70048 14.3724 10.5365 10.5365C14.3724 6.70048 19.5751 4.54545 25 4.54545C30.4249 4.54545 35.6276 6.70048 39.4635 10.5365C43.2995 14.3724 45.4545 19.5751 45.4545 25C45.4545 41.2585 29.696 54.8295 25 58.5227Z"
                  fill="#6C8FE5"
                />
              </svg>

              <h3>Localização</h3>
              <p>
                Rua Conceição, 321 - Santo Antônio - São Caetano do Sul -
                09530-060
              </p>
            </div>
            <div className="info-card" id="info-date">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.8333 3.84615H39.5833V1.92308C39.5833 1.41305 39.3638 0.923903 38.9731 0.563256C38.5824 0.202609 38.0525 0 37.5 0C36.9475 0 36.4176 0.202609 36.0269 0.563256C35.6362 0.923903 35.4167 1.41305 35.4167 1.92308V3.84615H14.5833V1.92308C14.5833 1.41305 14.3638 0.923903 13.9731 0.563256C13.5824 0.202609 13.0525 0 12.5 0C11.9475 0 11.4176 0.202609 11.0269 0.563256C10.6362 0.923903 10.4167 1.41305 10.4167 1.92308V3.84615H4.16667C3.0616 3.84615 2.00179 4.25137 1.22039 4.97267C0.438987 5.69396 0 6.67224 0 7.69231V46.1538C0 47.1739 0.438987 48.1522 1.22039 48.8735C2.00179 49.5948 3.0616 50 4.16667 50H45.8333C46.9384 50 47.9982 49.5948 48.7796 48.8735C49.561 48.1522 50 47.1739 50 46.1538V7.69231C50 6.67224 49.561 5.69396 48.7796 4.97267C47.9982 4.25137 46.9384 3.84615 45.8333 3.84615ZM10.4167 7.69231V9.61538C10.4167 10.1254 10.6362 10.6146 11.0269 10.9752C11.4176 11.3359 11.9475 11.5385 12.5 11.5385C13.0525 11.5385 13.5824 11.3359 13.9731 10.9752C14.3638 10.6146 14.5833 10.1254 14.5833 9.61538V7.69231H35.4167V9.61538C35.4167 10.1254 35.6362 10.6146 36.0269 10.9752C36.4176 11.3359 36.9475 11.5385 37.5 11.5385C38.0525 11.5385 38.5824 11.3359 38.9731 10.9752C39.3638 10.6146 39.5833 10.1254 39.5833 9.61538V7.69231H45.8333V15.3846H4.16667V7.69231H10.4167ZM45.8333 46.1538H4.16667V19.2308H45.8333V46.1538ZM20.8333 25V40.3846C20.8333 40.8946 20.6138 41.3838 20.2231 41.7444C19.8324 42.1051 19.3025 42.3077 18.75 42.3077C18.1975 42.3077 17.6676 42.1051 17.2769 41.7444C16.8862 41.3838 16.6667 40.8946 16.6667 40.3846V28.1106L15.5156 28.6442C15.0211 28.8725 14.4486 28.91 13.9241 28.7486C13.3996 28.5872 12.966 28.2401 12.7187 27.7837C12.4715 27.3272 12.4308 26.7987 12.6056 26.3146C12.7805 25.8304 13.1565 25.4302 13.651 25.2019L17.8177 23.2788C18.1354 23.1321 18.4886 23.0628 18.8435 23.0775C19.1985 23.0922 19.5434 23.1905 19.8456 23.363C20.1478 23.5354 20.3972 23.7764 20.5701 24.0629C20.743 24.3494 20.8336 24.672 20.8333 25ZM36.2396 32.3197L31.25 38.4615H35.4167C35.9692 38.4615 36.4991 38.6641 36.8898 39.0248C37.2805 39.3854 37.5 39.8746 37.5 40.3846C37.5 40.8946 37.2805 41.3838 36.8898 41.7444C36.4991 42.1051 35.9692 42.3077 35.4167 42.3077H27.0833C26.6964 42.3077 26.3172 42.2082 25.9881 42.0205C25.6589 41.8327 25.393 41.5641 25.2199 41.2446C25.0469 40.9252 24.9737 40.5676 25.0084 40.2119C25.0432 39.8562 25.1845 39.5165 25.4167 39.2308L32.9115 30.0072C33.0819 29.7977 33.2042 29.5583 33.2709 29.3036C33.3375 29.0489 33.347 28.7843 33.2989 28.5261C33.2507 28.2679 33.146 28.0215 32.9909 27.802C32.8359 27.5825 32.634 27.3946 32.3974 27.2497C32.1609 27.1049 31.8948 27.0062 31.6155 26.9597C31.3361 26.9132 31.0494 26.9199 30.773 26.9793C30.4966 27.0388 30.2362 27.1497 30.0079 27.3054C29.7796 27.4611 29.5881 27.6582 29.4453 27.8846C29.3126 28.1103 29.1322 28.3091 28.9148 28.4694C28.6974 28.6297 28.4475 28.7482 28.1797 28.8179C27.912 28.8875 27.6318 28.907 27.3557 28.8751C27.0797 28.8432 26.8134 28.7606 26.5725 28.6322C26.3316 28.5037 26.121 28.332 25.9531 28.1272C25.7852 27.9225 25.6635 27.6887 25.5951 27.4398C25.5267 27.1909 25.513 26.9318 25.5548 26.6779C25.5966 26.424 25.6931 26.1805 25.8385 25.9615C26.5267 24.8622 27.5885 24.0032 28.8594 23.5175C30.1303 23.0319 31.5392 22.9468 32.8678 23.2755C34.1964 23.6041 35.3704 24.3281 36.2079 25.3353C37.0454 26.3424 37.4995 27.5765 37.5 28.8462C37.5044 30.1003 37.0615 31.321 36.2396 32.3197Z"
                  fill="#D82044"
                  fill-opacity="0.8"
                />
              </svg>
              <h1>Datas e Horas</h1>
              <p>16/05/2023 8:00 - 11:30</p>
              <p>17/05/2023 8:00 - 11:30</p>
              <p>18/05/2023 8:00 - 11:30</p>
            </div>
            
          </div>
          </div>
        </div>
    </section>

    </>)
}

export default Info