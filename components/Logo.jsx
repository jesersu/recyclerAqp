import Svg, { G, Path, Ellipse } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
export const Logo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={150} height={36} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        fill="#1E3E4C"
        d="M5.465 8.515v3.803H8.47v2.126H5.465v9.572c0 .738.154 1.257.462 1.558.308.301.716.452 1.224.452.254 0 .54-.022.857-.066.318-.043.584-.09.8-.138l.395 1.967c-.273.174-.674.318-1.202.43a7.629 7.629 0 0 1-1.583.167c-1.173 0-2.106-.352-2.8-1.056-.694-.704-1.041-1.81-1.041-3.314v-9.572H.07v-2.126h2.507V8.515h2.888Zm17.3 17.234c-.5.845-1.142 1.496-1.929 1.952-.786.457-1.693.685-2.72.685-1.72 0-3.063-.549-4.03-1.646-.968-1.098-1.452-2.807-1.452-5.128v-7.036l-1.818-.408v-1.85h4.706v9.323c0 1.68.25 2.836.748 3.467.498.631 1.275.947 2.33.947 1.027 0 1.875-.206 2.544-.62.67-.412 1.175-.997 1.518-1.754v-9.105l-2.126-.408v-1.85h5.014v13.519l1.818.407v1.836h-4.413l-.19-2.33Zm6.89-11.581v-1.85h4.97l.278 2.287c.45-.806 1.004-1.438 1.664-1.894.66-.457 1.415-.685 2.265-.685.225 0 .457.017.696.051.24.034.423.07.55.11l-.381 2.665-1.642-.087c-.762 0-1.403.177-1.92.532-.519.354-.92.852-1.203 1.493v9.047l2.39.407v1.836h-7.667v-1.836l2.39-.407V14.576l-2.39-.408Zm12.417 12.076 2.39-.407V14.576l-2.39-.408v-1.85h5.278v13.519l2.39.407v1.836h-7.668v-1.836ZM47.35 8.282h-2.888V5.354h2.888v2.928Zm16.727 8.989h-2.17l-.469-1.894c-.352-.33-.794-.595-1.326-.794-.533-.2-1.137-.299-1.811-.299-1.026 0-1.789.224-2.287.67-.498.447-.748.986-.748 1.617 0 .622.22 1.112.66 1.472.44.36 1.334.68 2.683.961 2.003.428 3.494 1.008 4.471 1.741.978.733 1.466 1.717 1.466 2.95 0 1.399-.569 2.53-1.708 3.394-1.138.865-2.626 1.297-4.464 1.297-1.202 0-2.282-.138-3.24-.415a8.648 8.648 0 0 1-2.565-1.202l-.015-3.598h2.17l.542 2.112c.333.301.785.52 1.356.656a7.546 7.546 0 0 0 1.752.203c1.027 0 1.83-.206 2.412-.619.581-.412.872-.954.872-1.624a1.95 1.95 0 0 0-.725-1.559c-.484-.408-1.4-.762-2.75-1.063-1.925-.418-3.376-.986-4.353-1.705-.978-.718-1.466-1.69-1.466-2.913 0-1.282.55-2.375 1.649-3.278 1.1-.903 2.529-1.355 4.288-1.355 1.202 0 2.282.156 3.24.466.958.311 1.754.743 2.39 1.297l.146 3.482Zm2.595 8.973 2.39-.407V14.576l-2.39-.408v-1.85h4.985l.19 2.054a5.182 5.182 0 0 1 1.965-1.734c.801-.408 1.73-.612 2.785-.612 1.056 0 1.962.243 2.72.729.757.485 1.326 1.214 1.708 2.185a5.862 5.862 0 0 1 1.979-2.127c.82-.525 1.779-.787 2.873-.787 1.623 0 2.903.551 3.841 1.654.939 1.102 1.408 2.76 1.408 4.975v7.182l2.39.407v1.836h-7.683v-1.836l2.39-.407v-7.212c0-1.553-.269-2.653-.806-3.3-.538-.645-1.335-.968-2.39-.968-1.007 0-1.816.352-2.426 1.056-.611.704-.966 1.59-1.063 2.659v7.765l2.39.407v1.836H76.26v-1.836l2.39-.407v-7.212c0-1.476-.276-2.556-.829-3.24-.552-.686-1.35-1.028-2.397-1.028-.88 0-1.603.18-2.17.54-.566.358-1.001.863-1.304 1.514v9.426l2.39.407v1.836h-7.668v-1.836Zm28.954-6.19c0-2.332.636-4.252 1.906-5.762 1.27-1.51 2.996-2.266 5.175-2.266 2.19 0 3.922.753 5.197 2.258 1.276 1.506 1.914 3.429 1.914 5.77v.32c0 2.35-.636 4.273-1.906 5.768-1.27 1.496-2.996 2.244-5.175 2.244-2.2 0-3.934-.75-5.205-2.25-1.27-1.501-1.906-3.422-1.906-5.762v-.32Zm2.888.32c0 1.67.355 3.05 1.063 4.137.709 1.088 1.762 1.631 3.16 1.631 1.368 0 2.409-.543 3.122-1.631.714-1.088 1.07-2.467 1.07-4.137v-.32c0-1.652-.356-3.026-1.07-4.124-.713-1.097-1.764-1.646-3.152-1.646-1.387 0-2.433.549-3.137 1.646-.704 1.098-1.056 2.472-1.056 4.123v.32Z"
      />
      <Ellipse cx={131.578} cy={17.55} fill="#E76A1F" rx={17.661} ry={17.55} />
      <Path
        fill="#FFF"
        d="m128.226 25.718 1.694-.405v-9.059l-1.874-.405v-2.376h5.382v11.84l1.682.405v2.362h-6.884zM133.428 9.976h-3.508V7.02h3.508z"
      />
    </G>
  </Svg>
)
