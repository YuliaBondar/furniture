// document.addEventListener('DOMContentLoaded', () => {
//     const categories = [
//         { id: 1, photo: '../images/floorMirror/mirror1.png', name: 'напольные зеркала', quantity: '4шт' },
//         { id: 2, photo: '../images/floorLamp/lamp5.png', name: 'торшеры и лампы', quantity: '4шт' },
//         { id: 3, photo: '../images/armchairsСhairs/chair1.png', name: 'кресла и стулья', quantity: '4шт' },
//         { id: 4, photo: '../images/tablesСabinets/tabel1.png', name: 'столы и тумбы', quantity: '4шт' }
//     ];

//     const floorMirror = [
//         { id: 1, photo: '../images/floorMirror/sec.png', name: "Kristin", text: 'Зеркало напольное', price: '150 000' },
//         { id: 2, photo: '../images/floorMirror/third.png', name: "Arlene", text: 'Зеркало напольное', price: '150 000' },
//         { id: 3, photo: '../images/floorMirror/fourth.png', name: "Colleen", text: 'Зеркало напольное', price: '150 000' },
//         { id: 4, photo: '../images/floorMirror/fifth.png', name: "Coppelia", text: 'Зеркало напольное', price: '150 000' },
//         { id: 5, photo: '../images/floorMirror/six.png', name: "Artemide", text: 'Зеркало напольное', price: '150 000' }
//     ];

//     const floorLamp = [
//         { id: 1, photo: '../images/floorLamp/lamp1.png', name: "Aubrey", text: 'Лампа настольная', price: '150 000' },
//         { id: 2, photo: '../images/floorLamp/lamp2.png', name: "Leslie", text: 'Лампа настольная', price: '150 000' },
//         { id: 3, photo: '../images/floorLamp/lamp3.png', name: "Darrell", text: 'Лампа настольная', price: '150 000' },
//         { id: 4, photo: '../images/floorLamp/lamp4.png', name: "Coppelia", text: 'Лампа настольная', price: '150 000' },
//         { id: 5, photo: '../images/floorLamp/lamp5.png', name: "Artemide", text: 'Лампа настольная', price: '150 000' }
//     ];

//     const armchairsChairs = [
//         { id: 1, photo: '../images/armchairsСhairs/ch1.png', name: "Kathryn", text: 'Кресло', price: '150 000' },
//         { id: 2, photo: '../images/armchairsСhairs/ch2.png', name: "Wendy", text: 'Кресло', price: '150 000' },
//         { id: 3, photo: '../images/armchairsСhairs/ch3.png', name: "Judith", text: 'Кресло', price: '150 000' },
//         { id: 4, photo: '../images/armchairsСhairs/ch4.png', name: "Jane", text: 'Кресло', price: '150 000' },
//         { id: 5, photo: '../images/armchairsСhairs/ch5.png', name: "Darlene", text: 'Кресло', price: '150 000' }
//     ];

//     const tablesCabinets = [
//         { id: 1, photo: '../images/tablesСabinets/tabel1.png', name: "Kathryn", text: 'Стол', price: '150 000' },
//         { id: 2, photo: '../images/tablesСabinets/table2.png', name: "Wendy", text: 'Стол', price: '150 000' },
//         { id: 3, photo: '../images/tablesСabinets/table3.png', name: "Judith", text: 'Стол', price: '150 000' },
//         { id: 4, photo: '../images/tablesСabinets/table4.png', name: "Jane", text: 'Стол', price: '150 000' },
//         { id: 5, photo: '../images/tablesСabinets/table5.png', name: "Darlene", text: 'Стол', price: '150 000' }
//     ];

//     const contentCategory = document.getElementById('content-category');
//     const contentDetails = document.getElementById('content-details');

//     categories.forEach(({ id, photo, name, quantity }) => {
//         const categoryDiv = document.createElement('div');
//         categoryDiv.classList.add('first');
//         categoryDiv.innerHTML = `
//             <p>${name.replace(' ', '<br/>')}</p>
//             <img style="width:200px;" src="${photo}">
//             <div class="quantity">
//                 <div class="for-col" style="background-color: pink; border-radius: 40%;">${quantity}</div>
//             </div>
//             <div class="arrow">
//                 <button onclick="showDetails(${id})"><i class="fa fa-arrow-down"></i></button>
//             </div>
//         `;
//         contentCategory.appendChild(categoryDiv);
//     });

//     function showDetails(id) {
//         let items;
//         switch (id) {
//             case 1:
//                 items = floorMirror;
//                 break;
//             case 2:
//                 items = floorLamp;
//                 break;
//             case 3:
//                 items = armchairsChairs;
//                 break;
//             case 4:
//                 items = tablesCabinets;
//                 break;
//             default:
//                 items = [];
//         }

//         contentDetails.innerHTML = ''; // Clear previous details
//         items.forEach(({ photo, name, text, price }) => {
//             const detailDiv = document.createElement('div');
//             detailDiv.classList.add('detail');
//             detailDiv.innerHTML = `
//                 <img style="width:100px;" src="${photo}">
//                 <p>${name}</p>
//                 <p>${text}</p>
//                 <p>${price}</p>
//             `;
//             contentDetails.appendChild(detailDiv);
//         });
//     }
// });
