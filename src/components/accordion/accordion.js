import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './accordion.css';

const AccordionComponent = () => {
    return (
        <div name='services' className="container-fluid">
            <div className="row background-section">
                <div className='col-1'></div>
                <div className="col-md-6 col-sm-12 d-flex align-items-center">
                    <Accordion className="w-100" defaultActiveKey="0" flush>
                        <Accordion.Item className="" eventKey="0">
                            <Accordion.Header>Sé audaz y destaca</Accordion.Header>
                            <Accordion.Body>
                            ¿Estás listo para marcar tendencia y destacar entre la multitud? En NEVA, te ofrecemos las gorras más modernas y vanguardistas del mercado. Nuestras gorras personalizadas son el accesorio perfecto para expresar tu estilo único y atrevido. Con una amplia gama de colores y diseños exclusivos, te aseguramos que encontrarás la gorra perfecta para complementar tu look y resaltar tu personalidad. Únete a la comunidad de NEVA y déjate llevar por la moda y la innovación. ¡No esperes más para lucir audaz y marcar la diferencia con NEVA!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Descubre la pasión por la moda</Accordion.Header>
                            <Accordion.Body>
                            En NEVA, nos apasiona la moda y queremos compartir esa pasión contigo. Nuestras gorras son mucho más que simples accesorios, son una declaración de estilo y autenticidad. Diseñadas con atención meticulosa a los detalles, nuestras gorras te brindan ese toque de distinción que estás buscando. Además, gracias a nuestra tecnología de resistencia al agua y la suciedad, podrás mantener tu estilo impecable sin importar las condiciones. Descubre la pasión por la moda con NEVA y déjate llevar por el encanto de nuestras gorras. ¡Atrévete a destacar y sé el centro de atención donde quiera que vayas!
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
    );
}

export default AccordionComponent;
