import CommonButton from "../common-button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "../ui/select";

function CommonForm({ formControls = [], handleSubmit, form, btnText }) {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                {
                    formControls?.length > 0 ? formControls.map(controlItem => (
                        <FormField
                            key={controlItem.id}
                            control={form.control}
                            name={controlItem.id}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{controlItem.label}</FormLabel>
                                    {
                                        controlItem.componentType === 'input' ? (
                                            <FormControl>
                                                <Input
                                                    placeholder={controlItem.placeholder}
                                                    type={controlItem.type}
                                                    {...field}
                                                    // value={field.value}

                                                    className="w-full rounded h-[50px] border-none text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                                />
                                            </FormControl>
                                        ) : controlItem.componentType === 'select' ? (
                                            <Select value={field.value}
                                                onValueChange={field.onChange}
                                                // defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="w-full rounded h-[50px] border-none text-black bg-gray-200 text-[16px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                                                        {field.value?<SelectValue placeholder={controlItem.placeholder} className="text-black focus:text-black"/> : 'Select'}
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="bg-white">
                                                    {
                                                        controlItem.options?.map(optionItem => (
                                                            <SelectItem
                                                                key={optionItem.value}
                                                                value={optionItem.value}
                                                                className="text-black cursor-pointer focus:text-black"
                                                            >
                                                                {optionItem.label}
                                                            </SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        ) : null
                                    }
                                </FormItem>
                            )}
                        />
                    )) : null
                }

                <div className="flex justify-center mt-4 items-center">
                    <CommonButton type="submit" buttonText={btnText} />
                </div>

                
            </form>
        </Form>
    );
}

export default CommonForm;
