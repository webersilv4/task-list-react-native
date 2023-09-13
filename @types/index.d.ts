import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsDataApi = {
    tasks: [
        {
            realDate: string
            dateFormated: string
            tasks: [
            {
                title: string
                description: string
                taskCompleted: boolean,
                hour: number
            }]
        }
    ]
}

export type propsNavigationStack = {
	Home: undefined
	AddTasks: undefined
	CompletedTasks: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>