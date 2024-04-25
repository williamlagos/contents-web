/* eslint-disable @typescript-eslint/no-explicit-any */
interface ListProps {
  user: any
  perm: any
}

const List = ({ user, perm }: ListProps) => (
  <>
    <div
      id="Grade"
      className="transitions"
    >
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 brick stamp">
        <ul className="block nav nav-pills nav-stacked">
          <div className="profilehead">
            {user ? (
              <img
                src="{{user.profile.visual}}"
                width="100%"
              />
            ) : (
              <div className="centered">
                <span className="glyphicon glyphicon-user giant-glyphicon"></span>
              </div>
            )}
            <h2>
              <dl>
                <dt>{user}</dt>
              </dl>
            </h2>
            <div className="id hidden">{user}</div>
          </div>
          {perm ? (
            <>
              <li style={{ width: '60%', marginLeft: '20%' }}>
                <div
                  style={{ marginBottom: '20px' }}
                  className="paypal hidden"
                ></div>
                <div className="pagseguro hidden"></div>
              </li>
              <li>
                <a
                  href="efforia/basket"
                  className="cart"
                >
                  <h2 className="menu">
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                    &nbsp; Compras
                  </h2>
                </a>
              </li>
              <li>
                <a
                  href="efforia/basketclean"
                  className="cartclean"
                >
                  <h2 className="menu">
                    <span className="glyphicon glyphicon-trash"></span>&nbsp;
                    Limpar compras
                  </h2>
                </a>
              </li>
              <li>
                <a
                  href="efforia/following"
                  className="following"
                >
                  <h2 className="menu">
                    <span className="glyphicon glyphicon-thumbs-up"></span>
                    &nbsp; Seguindo
                  </h2>
                </a>
              </li>
              <li>
                <a
                  href="efforia/config"
                  className="page"
                >
                  <h2 className="menu">
                    <span className="glyphicon glyphicon-cog"></span>&nbsp;
                    Ajustes
                  </h2>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="logout"
                >
                  <h2 className="menu">
                    <span className="glyphicon glyphicon-log-out"></span>&nbsp;
                    Sair
                  </h2>
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a
                  href="#"
                  className="logout"
                >
                  <h2 className="menu">
                    <span className="glyphicon glyphicon-log-out"></span>&nbsp;
                    Sair
                  </h2>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
    <div
      id="Espaco"
      className="modal hide fade"
    ></div>
  </>
)

export default List
