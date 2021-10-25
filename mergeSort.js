function merge(arr, l, r){
	let mid= Math.round((l+r)/2);
	
	let n=mid-l+1;
	let m=r-mid;
	
	let A = [],B = [];
    A.length = n;
    B.length = m;
	
	/*
	@ প্রথমেই আমাদেরকে j=l থেকে j=mid পর্যন্ত  A অ্যারেতে কপি করে নিতে হবে 
	@ এরপর আমাদেরকে j=mid+1 থেকে j=r পর্যন্ত B অ্যারেতে কপি করে নিতে হবে  
	*/
	let i=0,j=0, k = 0;
	for(i=0,j=l;i<n;i++,j++){
		A[i]=arr[j];
	}
	for(i=0,j=mid+1;i<m;i++,j++){
		B[i]=arr[j];
	}
	
	i=j=0;
	k=l;
	while(i<n && j<m){
		if(A[i]<B[j]){ //যদি A[i]<B[j] হয় তবে A[i] কে অ্যারেতে রাখবো।
			arr[k]=A[i];
			i++;
		}else{ //যদি A[i]>=B[j] হয় তবে B[j] কে অ্যারেতে রাখবো।  
			arr[k]=B[j];
			j++;
		}
		k++; // পরবর্তী ইনডেক্স এর যাবো। 
	}
	
	/* 
	@ যদি অ্যারেতে A অথবা B তে কনো উপাদান অতিরিক্ত হয় তবে তাদের মূল অ্যারেতে কপি করি। 
	*/ 
	while(i<n){
		arr[k]=A[i];
		i++;
		k++;
	}
	while(j<m){
		arr[k]=B[j];
		j++;
		k++;
	}
    const newArray = [...A, ...B]
	return newArray.reverse();
}
function mergeSort(arr, l, r){
	if(l>=r) {
    const mid=Math.round((l+r)/2); // অ্যারেটির মাঝের ইনডেক্স বের করলাম 
	mergeSort(arr,l,mid); // বামপাশের অর্ধেককে রিকার্সিভ ভাবে সর্ট করার জন্য রিকার্সিভ কল করলাম 
	mergeSort(arr,mid+1,r); // ডানপাশের অর্ধেককে রিকার্সিভ ভাবে সর্ট করার জন্য রিকার্সিভ কল করলাম 
	//merge(arr,l,r); // অ্যারে উপরে রিকার্সিভ কলের পরে আমরা l-mid এবং mid+1 থেকে r পর্যন্ত দুইটি সর্টেড অংশ পাবো। এদের মার্জ করা লাগবে। 
    }
    return merge(arr, l, r);
}

const arr = [9,8,7,6,5,4,4,4];
const result = mergeSort(arr,0,7);
console.log(result)
	
