$('button[type="submit"]').on('click', function(){
	$yearOfEduction_Group = $("input:checkbox[name='yearOfEducation[]']");

	$yearOfEduction_Group.prop('required', true);
	if($yearOfEduction_Group.is(":checked")){
		$yearOfEduction_Group.prop('required', false);
	}
})