import React from 'react'

class Icons extends React.Component {
  constructor(props) {
    super(props)

    let arr = this.iconSymbols.split(/<symbol.*?id="/g);
    let ids = [];
    arr.forEach( (item, index) => {
      if (index !== 0) {
        ids.push(item.split('"')[0])
      }
    })

    this.iconIds = ids;
  };

  render() {
    let iconList = this.iconIds.map(iconId => (
      <div key={iconId}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <use xlinkHref={`#${iconId}`} />
        </svg>
        <div className="icon-view bold">
          { iconId }
        </div>
      </div>
    ));
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ paddingTop: '1em' }} className="bolder">
            Usage:
          </div>
          <div className="code-balloon normal">
            <span className="bolder">{`<nectar-icon`}</span>
            <span className="bold"> size</span>="<span className="bolder">20</span>"
            <span className="bold"> icon</span>="<span className="bolder">nectaricon-exemplo</span>"
            <span className="bold"> class-name</span>="<span className="bolder">fill-azul</span>"
            <span className="bolder">{`></nectar-icon> `}</span>
          </div>
        </div>
        <flex-div>
          <svg version="1" xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}
            dangerouslySetInnerHTML={{ __html: this.iconSymbols }}>
          </svg>
          { iconList }
        </flex-div>
      </div>
    )
  };

  iconSymbols = `

  <symbol id="nectaricon-alert-sign" viewBox="0 0 24 24"><path d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z"/><path fill="none" d="M0 0h24v24H0V0z"/></symbol>
  <symbol id="nectaricon-limit-unset" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"/><path fill="none" d="M0 24V0"/></symbol>
  <symbol id="nectaricon-clock" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></symbol>
  <symbol id="nectaricon-search" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></symbol>
  <symbol id="nectaricon-add-contact" viewBox="0 0 24 24"><defs><clipPath id="a"><rect width="24" height="24" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="24" height="24" fill="#fff" opacity="0"/><rect width="10" height="10" transform="translate(22.881 5.571) rotate(90)" fill="none"/><g transform="translate(-1044.333 112.667)"><g transform="translate(1065.899 -107.61) rotate(90)"><rect width="1.591" height="6.364" rx="0.5" transform="translate(2.386)"/><rect width="1.591" height="6.364" rx="0.5" transform="translate(6.364 2.386) rotate(90)"/></g><path d="M10.667,10.667A3.333,3.333,0,1,0,7.333,7.333,3.332,3.332,0,0,0,10.667,10.667Zm0,1.667C8.442,12.333,4,13.45,4,15.667v1.667H17.333V15.667C17.333,13.45,12.892,12.333,10.667,12.333Z" transform="translate(1042.333 -111.667)"/></g></g></symbol>
  <symbol id="nectaricon-thumbs-up" viewBox="0 0 24 24"><path opacity=".87" fill="none" d="M0 0h24v24H0V0z"/><path d="M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z"/></symbol>
  <symbol id="nectaricon-value-not-found" viewBox="0 0 24 24"><defs><style>.a{fill:none;}</style></defs><title>valor-nao-encontrado</title><path class="a" d="M0,0H24V24H0Z"/><path class="a" d="M0,0H24V24H0Z"/><path class="a" d="M0,0H24V24H0Z"/><path d="M12,4.58a4.51,4.51,0,0,1,4.5,4.5V11.2L19,13.7V9.08a7,7,0,0,0-7-7,6.83,6.83,0,0,0-3.6,1l1.84,1.84A4.5,4.5,0,0,1,12,4.58Z"/><path d="M21.72,20,4.05,2.28,2.28,4.05l3,3a6.64,6.64,0,0,0-.31,2v5.84a7,7,0,0,0,12.47,4.32L20,21.72ZM12,19.42a4.51,4.51,0,0,1-4.5-4.5V9.27l8.2,8.2A4.5,4.5,0,0,1,12,19.42Z"/></symbol>
  <symbol id="nectaricon-warning-sign" viewBox="0 0 20 20"><defs><clipPath id="a"><rect width="20" height="20" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M0,0H20V20H0Z" fill="none"/><path d="M8.315,16.63a1.823,1.823,0,0,1-1.3-.536L.536,9.611a1.836,1.836,0,0,1,0-2.593L7.018.536a1.835,1.835,0,0,1,2.593,0l6.481,6.482a1.836,1.836,0,0,1,0,2.593L9.611,16.093A1.823,1.823,0,0,1,8.315,16.63ZM7.4,10.149v1.833H9.231V10.149Zm0-5.5V8.315H9.231V4.648Z" transform="translate(1.686 1.685)"/></g></symbol>
  <symbol id="nectaricon-warning-sign-old" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></symbol>

  <symbol id="nectaricon-add-sign" viewBox="0 0 24 24"><defs><clipPath id="a"><rect width="24" height="24" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="24" height="24" transform="translate(24) rotate(90)" fill="#fff" opacity="0"/><g transform="translate(19 5) rotate(90)"><rect width="3.5" height="14" rx="1" transform="translate(5.25)"/><rect width="3.5" height="14" rx="1" transform="translate(14 5.25) rotate(90)"/></g></g></symbol>
  <symbol id="nectaricon-arrow-back" viewBox="0 0 24 24"><path opacity=".87" fill="none" d="M0 0h24v24H0V0z"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></symbol>
  <symbol id="nectaricon-arrow-diagonal" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"></path></symbol>
  <symbol id="nectaricon-arrow-down" viewBox="0 0 24 24"><path opacity=".87" fill="none" d="M24 24H0V0h24v24z"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></symbol>
  <symbol id="nectaricon-checkmark" viewBox="0 0 24 24"><defs><clipPath id="clip-path"><rect width="24" height="24" fill="none"/></clipPath></defs><g id="icon-check-24px" clip-path="url(#clip-path)"><rect id="Retângulo_22" data-name="Retângulo 22" width="24" height="24" transform="translate(24) rotate(90)" fill="none"/><g id="Grupo_954" data-name="Grupo 954" transform="translate(4.936 5.373)"><path id="Caminho_377" data-name="Caminho 377" d="M16.935,24.286l-5.179-5.4a1.338,1.338,0,0,1,0-1.853l.968-1.009a1.338,1.338,0,0,1,1.932,0L16.935,18.4l6.27-6.542a1.338,1.338,0,0,1,1.932,0l.968,1.009a1.338,1.338,0,0,1,0,1.853Z" transform="translate(-11.384 -11.443)"/></g></g></symbol>
  <symbol id="nectaricon-dollar-sign" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path><path d="M0 0h24v24H0z" fill="none"></path></symbol>
  <symbol id="nectaricon-modal-close" viewBox="0 0 24 24"><defs><clipPath id="a"><rect width="24" height="24" fill="none"></rect></clipPath></defs><g clip-path="url(#a)"><path d="M0,0H24V24H0Z" fill="none"></path><g transform="translate(11.959 1) rotate(45)"><rect width="4" height="16" rx="1" transform="translate(6)"></rect><rect width="4" height="16" rx="1" transform="translate(16 6) rotate(90)"></rect></g></g></symbol>
	<symbol id="nectaricon-trash" viewBox="0 0 24 24"><defs><clipPath id="a"><rect width="24" height="24" fill="none"/></clipPath></defs><g clip-path="url(#a)"><rect width="24" height="24" fill="none"/><g transform="translate(-4 -5)"><path d="M0,0H13L10,11H3Z" transform="translate(10 15)"/><rect width="13.376" height="3" rx="0.999" transform="matrix(0.985, -0.174, 0.174, 0.985, 8.933, 11.122)"/><path d="M16.07,11.845h0l.946-.167a.952.952,0,0,0,.77-1.1l-.167-.947a.952.952,0,0,0-1.1-.773l-.946.166h0l-.946.168a.952.952,0,0,0-.771,1.1l.167.948a.952.952,0,0,0,1.1.772Z" transform="translate(-0.219 -0.002)"/></g></g></symbol>

	<symbol id="nectaricon-calendar" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H7V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 18H5c-.55 0-1-.45-1-1V8h16v12c0 .55-.45 1-1 1z"/></symbol>
	<symbol id="nectaricon-checkbox-outline" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></symbol>
	<symbol id="nectaricon-checkbox-checked" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></symbol>
	<symbol id="nectaricon-edit" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></symbol>
	<symbol id="nectaricon-feedback" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></symbol>
	<symbol id="nectaricon-money" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/><path d="M0 0h24v24H0z" fill="none"/></symbol>
	<symbol id="nectaricon-sort-order" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></symbol>
	<symbol id="nectaricon-timelapse" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></symbol>
	<symbol id="nectaricon-timer" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M14 1h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zm-2 13c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1zm7.03-6.61l.75-.75c.38-.38.39-1.01 0-1.4l-.01-.01c-.39-.39-1.01-.38-1.4 0l-.75.75C16.07 4.74 14.12 4 12 4c-4.8 0-8.88 3.96-9 8.76C2.87 17.84 6.94 22 12 22c4.98 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></symbol>
	<symbol id="nectaricon-undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></symbol>

  `

}

export default Icons;
