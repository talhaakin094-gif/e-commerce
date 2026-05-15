import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer({ footer }) {
  return (
    <footer className="bg-[#1e2440] pt-15 py-10 border-t">
      <div className="max-w-[1050px] text-[#f3f4f6] mx-auto">
        <div className="flex justify-between pb-15">
          <div>
            <h3 className="text-[24px] pb-3">{footer.title}</h3>
            <p>{footer.subtitle}</p>
          </div>
          <button className="bg-[#2ea3f2] px-12 rounded-lg flex items-center h-15">Contact Us</button>
        </div>
        <div className="grid grid-cols-5 pb-25">
          {footer.row.map((item, i) => (
            <div key={i}>
              <h3 className="text-[20px] pb-3">{item.title}</h3>
              {item.subtitle.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <p>{footer.text}</p>
          <div className="flex gap-5 text-[#2ea3f2] text-3xl">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;