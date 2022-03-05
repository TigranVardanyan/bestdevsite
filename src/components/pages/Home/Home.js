import avatar from './../../../assets/avatar.png'

const Home = props => {
  return (
    <section id="home" className="section-home section current-section">
      <div className="main-header row">
        <div className="col-md-4 col-12">
          <div className="photo">
            <img id="photo-avatar" src={avatar} alt="" width={200} height={200}/>
          </div>
        </div>
        <div className="col-md-8 col-12 main-header_text">
          <h2 className="author">TIGRAN VARDANYAN</h2>
          <div className="profession">
            <h2 className="reveal">Software Developer</h2>
          </div>
          <div className="main-header-social_links">
            <div className="social-links_new">
              <a className="soc_btn cChange" href="https://www.facebook.com/profile.php?id=100005146777210"><i
  className="fab fa-facebook-f"/></a>
              <a className="soc_btn cChange" href="https://www.instagram.com/tig.va/"><i
  className="fab fa-instagram"/></a>
              <a className="soc_btn cChange" href="https://ru.stackoverflow.com/users/299327/tigran-vardanyan"><i
  className="fab fa-stack-overflow"/></a>
              <a className="soc_btn cChange" href="https://github.com/TigranVardanyan"><i
  className="fab fa-github-alt"/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content row">
        <div className="main_content-about col-md-6 col-sm-12">
          <div className="row">

            <div>
              <h2>About Me</h2>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consnumquam quae quod vel. Accusamus amet dolores facilis iusto minus
                obcaecati odio quae qui quo. Cum dolore laboriosam laudantium nulla perferendis, voluptatum.</p>
            </div>
            <div>
            </div>
            <button className="download_button">
              DOWNLOAD RESUME
            </button>
          </div>
        </div>
        <div className="main_content-data col-md-6 col-sm-12">
          <div className="row">
            <table>
              <tbody>
              <tr>
                <td className="table_q">Age</td>
                <td className="table_a">23</td>
              </tr>
              <tr>
                <td className="table_q">Freelance</td>
                <td className="table_a">Available</td>
              </tr>
              <tr>
                <td className="table_q">Residence</td>
                <td className="table_a">Armenian</td>
              </tr>
              <tr>
                <td className="table_q">Address</td>
                <td className="table_a">Armenia, Yerevan</td>
              </tr>
              <tr>
                <td className="table_q">E-mail</td>
                <td className="table_a cChange">tig.vardanyan.001@gmail.com</td>
              </tr>
              <tr>
                <td className="table_q">Phone</td>
                <td className="table_a">+374 77 720 166</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
)
}

export default Home