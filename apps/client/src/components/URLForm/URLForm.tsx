import { Box, Button, TextField } from "@mui/material";
import { useCallback } from "react";
import { Form, FormSubmitHandler, useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateShortURLMutation } from "./useCreateShortURLMutation";

export type URLFormProps = {
  url?: string;
  onSuccess: (shortUrl: string) => void;
};

export type URLFormValues = {
  url: string;
};

const FORM_VALIDATION = z.object({
  url: z.string().url(),
});

export default function URLForm({ url, onSuccess }: URLFormProps) {
  const createShortURLMutation = useCreateShortURLMutation();
  const form = useForm<URLFormValues>({
    defaultValues: {
      url,
    },
    resolver: zodResolver(FORM_VALIDATION),
  });

  const handleSubmit = useCallback<FormSubmitHandler<URLFormValues>>(
    (form) => {
      createShortURLMutation.mutateAsync(form.data.url).then((data) => {
        onSuccess?.(data.data.shortKey);
      });
    },
    [createShortURLMutation, onSuccess]
  );

  return (
    <Form control={form.control} onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        rowGap={2}
        sx={{ width: "100%" }}
      >
        <Controller
          control={form.control}
          name="url"
          render={({ field }) => (
            <TextField
              value={field.value}
              size="medium"
              fullWidth
              label="URL"
              placeholder="https://example.com"
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
        <Button
          type="submit"
          size="large"
          fullWidth
          disabled={!form.formState.isValid}
          sx={{ mt: 2, textAlign: "center" }}
          loading={createShortURLMutation.isPending}
        >
          Generate
        </Button>
      </Box>
    </Form>
  );
}
