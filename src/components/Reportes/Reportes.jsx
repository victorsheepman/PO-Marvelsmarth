import React from 'react'
import Card from 'react-bootstrap/Card';
export const Reportes = ({title='estados de resultado', bootstrap, excell=false, styles}) => {
  return (
    <Card className={bootstrap} style={{...styles, backgroundColor:'#f6c84c',}}>
        <Card.Body className={`d-flex align-items-center`} >
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 65" width="56" height="65"><defs><image  width="56" height="65" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABBCAMAAACzdZclAAAAAXNSR0IB2cksfwAAAhZQTFRFEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkoEBkobUOdaAAAALJ0Uk5TAA9hotPy5LKDN4ju/7YsGtJyDOd3Bss7c5pIKSh12uKdRQGwTTZX4KnJz2Jr1y0k9PElIw1fsfuSTtm4An/FcC/19vPUZycREhOKOHYHkOmB0cd6hNvvQ3yGMxVAYOZTRI9x7DpBPkm7P5P9K+PrmPj+GN/qBL0OCqiOpl7NvN3clo3KWRb6+ci/AxDG4WYuHCIfIHS10IAbkdaequUIMotHxGrBwqEe1c4h8HlGw+iHMA6glm8AAALsSURBVHicxdf9O1NRHADwu0jNLhMtGRHy0lahFrWULGRqFaV3Wgu1SFq0StmkhFZRIkqi9/f6D/M9d5dz7j1n5z57np6+v5zje74fO2/XLkFQhG5ZTOxyZsStWKlXCiniDSIvEhLVzJjEZRCrlC45RZMTxdWkM63R6EQxlYBrpWSaOT2DFfp1magmi4DrUS6bvmty5OSiqg14Lg8y+ZHdQhRAWSGRMm+0WLlO2ARwM79OFVsAGqKARQCLo4AZAEuigOkkzDFu3aaIoiIbF24vzSqjXBDDjshwp515t3aVR4C7I93KPWxYEcktfCYL7pUrKisdeOwrY0gZSs9uVXXN/lonHro6xjrD8AAaS6Ds3sHF2VpcFHgImsMUJxxZWme9Sw0boDlKg8dgpFEtw/A4NCdo8CSMnDodlmeUsBKaszTYBCPNwjlJFrgUsAQaNw2ix0c8L1QrZsuFQj0CHsF9gZA0aGppbWtrbQk/FBelj7rkvdyOr5MCO65IpZ1e6eer4dPouia1zT46NF2Xz627R5I3RDJi6NC/VHEzPPdbJGxgTPW2XNC7uEF37uKwj7U5dfZAMBiw9+dge+u9N5AZCNq70T5pOw4imqKF96OF1n8Enb4HRPicmqCzzzH4kIhBx1ANH5YPi5RoHOHCRzQnik4uHAnR3GPp3j6B/jD0EqFXTKzRF2pXsvakp8ISHIJeDRpQ7Oro2DMixkblkedQNw69HnjxeKH5HIXW0MSk1HvZWxWTrB0q4z/DKct0LBHTE69MGmA87Rxf86GNfnN0XOiaobmuN/ypznaqnUN+T3S+7XezoOB3m+eIMGf75CH4Y42/bKJvKy9jA7DIh7p5LIG+UOb48B3UvccSHyAxyYeFUPcRS0xBIoXrOtBOebBMKsqUcpwxDpV9wnOfUeqL9auNFf4MzzdUlEv8sln5xNj/UckFteQ0xuk3TR15ygV818S6fqiXrv/Jd7lj1F0zpw38Yq9xZv73H6X4C12p7dMNhAudAAAAAElFTkSuQmCC"/></defs><style></style><use  href="#img1" x="0" y="0"/></svg>
            <p className='mx-3 reporte'>
                {title}
            </p>
            {
                excell && <img src="../../assets/Icons/dowload.png" alt="" />
            }
        </Card.Body>
    </Card>
  )
}
