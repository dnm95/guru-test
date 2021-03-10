export function parseAddress(address) {
  return `${address.address1}, ${address.city}, ${address.state}, ${address.country}`;
}

export default parseAddress;
