export default function Footer() {
  return (
    <>
      <div className="footer">
        <footer>
          <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div class="col-md-4 d-flex align-items-center">
                <a
                  href="/"
                  class="mb-3 me-2 mb-md-0  text-decoration-none lh-1"
                >
                  <svg class="bi" width="30" height="24">
                    <use xlink:href="#bootstrap" />
                  </svg>
                </a>
                <span class="">&copy; 2024 Omar Morales - <span className="footerTextBlue"> Made in React</span> ⚛️ </span>
              </div>
 
            </footer>
          </div>
        </footer>
      </div>
    </>
  );
}
