const dummyApiResponse = {
 showImageSlider: true,
 showTicTacToeBoard: false,
 showTreeView: true,
};

export default async function apiResponse() {
 const response = await new Promise( resolve => setTimeout(() => resolve(dummyApiResponse), 500))
 return response;
}

// export default function apiResponse() {
//  return new Promise((resolve) => setTimeout(() => resolve(dummyApiResponse),1000))
// }