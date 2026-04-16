import { whatsappNumber } from 'src/data/site'

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function buildServiceMessage(serviceName) {
  return `Hola, quiero información sobre el servicio de ${serviceName}.`
}

export function buildServicePaymentQuery(service) {
  return {
    servicio: service.t,
    precio: service.precio,
    desc: service.d || '',
  }
}
