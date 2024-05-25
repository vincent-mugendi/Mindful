def calculate_distance(criteria, answers):
    distance = 0
    
    for key, value in criteria.items():
        if key in answers:
            # Convert answer value to string
            answer_value = str(answers[key])
            if key == "age":  # Special handling for age
                # Extract minimum and maximum age values from criteria
                age_min, age_max = map(int, value[0].split('-'))
                # Extract user's age and check if it falls within the range
                user_age = int(answers["age"].split('-')[0])
                if not (age_min <= user_age <= age_max):
                    distance += 1  # Add distance if user's age is outside the range
            elif isinstance(value, list):
                # Convert each value in the list to string for comparison
                str_values = [str(val) for val in value]
                if answer_value in str_values:
                    distance += 0  # No distance if there is a match
                else:
                    distance += 1  # Add distance for no match
            else:
                if answer_value == str(value):
                    distance += 0  # No distance if there is a match
                else:
                    distance += 1  # Add distance for no match
    
    return distance

def determine_cluster(answers):
    clusters = {
        "cluster1": {
            "age": ["18-24"],
            "interest-level": [2],
            "anxiety-level": [2],
            "condition-period": [2],
            "interference-level": [2],
            "activity-level": [1],
            "loneliness-level": [2]
        },
        "cluster2": {
            "age": ["25-34"],
            "interest-level": [3],
            "anxiety-level": [3],
            "condition-period": [3],
            "interference-level": [3],
            "activity-level": [2],
            "loneliness-level": [3]
        },
        "cluster3": {
            "age": ["35-44"],
            "interest-level": [4],
            "anxiety-level": [4],
            "condition-period": [4],
            "interference-level": [4],
            "activity-level": [3],
            "loneliness-level": [4]
        }
        # Add definitions for other clusters similarly
    }

    lowest_distance = float('inf')
    user_cluster = "unknown"

    for cluster, criteria in clusters.items():
        distance = calculate_distance(criteria, answers)
        if distance < lowest_distance:
            lowest_distance = distance
            user_cluster = cluster

    return user_cluster
