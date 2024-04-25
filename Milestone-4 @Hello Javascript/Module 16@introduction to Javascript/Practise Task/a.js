var findMedianSortedArrays = function (nums1, nums2) {
    const positive = [];
    const negative = [];
    for (let i = 0; i < nums1.length; i++) {
        if(nums1[i]>=0){
            positive.push(nums1[i]);
        }
        else{
            negative.push(nums1[i]);
        }
    }

    console.log(positive);

    for (let i = 0; i < nums2.length; i++) {
        if(nums1[i]>=0){
            positive.push(nums2[i]);
        }
        else{
            negative.push(nums2[i]);
        }
    }
    console.log(negative);

    positive.sort();
    negative.reverse();
    console.log(negative);
    const children = positive.concat(negative);

    console.log(children);
    if (children.length % 2 == 0) {
        half = (children.length / 2);
        console.log(half);
        firstNum = children[half - 1];
        secondNum = children[half];
        result = (firstNum+secondNum)/2;
        console.log(result);
    }
    else{
        const half = parseInt(children.length/2) ;
        // console.log(half);
        console.log(children[half]);
    }

};

findMedianSortedArrays([3],[-2,-1])