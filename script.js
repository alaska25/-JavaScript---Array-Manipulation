console.log("Hello world");


// 3. Create an addStudent() function that will accept a name of the student and add it to the student array.

let studentName="";
let studentArray = [];
function addStudent(studentName){
	studentArray.push(studentName);
	console.log(studentName + " was added in the array.");
	console.log(studentArray);
}

// 4. Create a countStudents() function that will print the total number of students in the array.
function countStudents(){
	console.log("There are a total of " + studentArray.length + " students in the array.");
}



// 5. Create a printStudents() function that will sort and individually print the students (sort and forEach methods) in the array.
function printStudents(){

  console.log(studentArray.sort());

  studentArray.forEach(function(student){
  console.log(student);
})
}

/*
6. Create a findStudent() function that will do the following: // function findStudent(){}
Search for a student name when a keyword is given (filter method).
If one match is found print the message studentName is an enrollee.
If multiple matches are found print the message studentNames are enrollees.
If no match is found print the message studentName is not an enrollee.
The keyword given should not be case sensitive.


*/


 function findStudent(studentName){
	const result = students.filter(function(student){
		return student.includes(studentName);
	});

	if (result.length === 1) {
		console.log(studentName + " is an enrollee")
	}
	else if (result.length > 1){
		console.log(students + " are enrollees");
	}
	else {
		console.log(studentName + " is not an enrollee.");
	}
}

/*
Activity 17(Stretch Goal):
Create an addSection() function that will add a section to all students in the array with the format of studentName - Section A (map method).
*/


function addSection(section){
	let studentSection = students.map(function(student){
		return students + "-" + section;
	})

	console.log(studentSection);
}

/*
Create a removeStudent() Function that will do the following:
Capitalize the first letter of the user’s input (toUpperCase and slice methods).
Retrieve the index of the student to be removed (indexOf method).
Remove the student from the array (splice method).
Print a message that the studentName was removed from the student’s list.

*/


function removeStudent(studentName){
	console.log(studentName.charAt(0).toUpperCase() + studentName.slice(1))
	let studentIndex = students.indexOf(studentName);
	console.log("Index of student is" +studentIndex);
	students.splice(studentIndex, 1);
	console.log(studentName + " was removed from the student's list");


}



